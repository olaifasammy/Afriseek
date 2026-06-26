
import { AfriseekEntity } from "../../types/entity";
import { EntityType } from "../../types/enums/EntityType";
import { RelationshipType } from "../../types/enums/RelationshipType";

/**
 * GeoContextEngine
 * Enforces locality-first discovery:
 * Akure → Ondo → Nigeria → West Africa → Africa
 * NOT random jumps across the graph
 */
export class GeoContextEngine {

  private geoPriority: Record<string, number> = {
    // highest locality priority
    city: 100,
    town: 95,
    village: 90,
    district: 85,
    local_government: 80,
    state: 70,
    province: 70,
    region: 60,
    country: 50,
    continent: 40,

    // cultural clustering (very important for Afriseek)
    ethnic_group: 65,
    tribe: 65,
    language: 60,
    religion: 55,

    // historical structures
    kingdom: 68,
    empire: 66,
    dynasty: 64,
    historical_event: 50,

    // default
    default: 10
  };

  /**
   * Extract geo relevance score
   */
  getGeoScore(entity: AfriseekEntity): number {
    return this.geoPriority[entity.entityType] ?? this.geoPriority.default;
  }

  /**
   * Checks if entity is geographically closer to root
   */
  isGeoLocal(root: AfriseekEntity, candidate: AfriseekEntity): boolean {

    const rootGeo = this.getGeoScore(root);
    const candidateGeo = this.getGeoScore(candidate);

    // same or closer level = allowed
    return candidateGeo >= (rootGeo - 15);
  }

  /**
   * Strong locality bias scoring
   */
  scoreLocalBias(
    root: AfriseekEntity,
    candidate: AfriseekEntity
  ): number {

    let score = 0;

    // same entity type family boosts locality
    if (this.isSameGeoFamily(root, candidate)) {
      score += 120;
    }

    // direct relationship boosts locality heavily
    // Use RelationshipType to identify geographic links
    const geoRelationshipTypes = [
      RelationshipType.LOCATED_IN,
      RelationshipType.CONTAINS,
      RelationshipType.PART_OF,
      RelationshipType.NEIGHBOR_OF,
      RelationshipType.BORDERS,
      RelationshipType.NEAR
    ];

    const directMatch = root.relationships.some(
      r => r.targetId === candidate.id && geoRelationshipTypes.includes(r.type as RelationshipType)
    );

    if (directMatch) {
      score += 200;
    }
  // ...

    // shared neighbors = contextual closeness
    const rootTargets = new Set(
      root.relationships.map(r => r.targetId)
    );

    const shared = candidate.relationships.filter(
      r => rootTargets.has(r.targetId)
    );

    score += shared.length * 40;

    // enforce geographic hierarchy bias
    score += this.getGeoScore(candidate);

    return score;
  }

  /**
   * Prevents jumps like Akure → Nigeria → random continent skipping
   */
  isSameGeoFamily(
    a: AfriseekEntity,
    b: AfriseekEntity
  ): boolean {

    const geoFamily = new Set([
      EntityType.CITY,
      EntityType.TOWN,
      EntityType.VILLAGE,
      EntityType.DISTRICT,
      EntityType.LOCAL_GOVERNMENT,
      EntityType.STATE,
      EntityType.PROVINCE,
      EntityType.COUNTRY,
      EntityType.CONTINENT
    ]);

    if (!geoFamily.has(a.entityType) || !geoFamily.has(b.entityType)) {
      return false;
    }

    return true;
  }

  /**
   * Sort candidates so locality ALWAYS comes first
   */
  sortByGeoPriority(
    root: AfriseekEntity,
    candidates: AfriseekEntity[]
  ): AfriseekEntity[] {

    return candidates.sort((a, b) => {

      const scoreA =
        this.scoreLocalBias(root, a);

      const scoreB =
        this.scoreLocalBias(root, b);

      return scoreB - scoreA;
    });
  }

  /**
   * Hard filter for unwanted long jumps (configurable safety net)
   */
  filterOutDistantJumps(
    root: AfriseekEntity,
    candidates: AfriseekEntity[]
  ): AfriseekEntity[] {

    return candidates.filter(c => {

      const geoA = this.getGeoScore(root);
      const geoB = this.getGeoScore(c);

      // allow upward or same-level expansion only
      return geoB >= geoA - 25;
    });
  }
}

