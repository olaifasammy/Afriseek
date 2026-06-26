import { AfriseekEntity } from "../../types/entity";
import { EntityType } from "../../types/enums/EntityType";

export class CulturalGraphBiasEngine {

  private localityWeight: Partial<Record<EntityType, number>> = {
    [EntityType.VILLAGE]: 100,
    [EntityType.TOWN]: 110,
    [EntityType.CITY]: 120,
    [EntityType.DISTRICT]: 130,
    [EntityType.LOCAL_GOVERNMENT]: 140,
    [EntityType.STATE]: 160,
    [EntityType.PROVINCE]: 160,
    [EntityType.COUNTRY]: 180,
    [EntityType.CONTINENT]: 200
  };

  private culturalWeight: Partial<Record<EntityType, number>> = {
    [EntityType.TRIBE]: 180,
    [EntityType.ETHNIC_GROUP]: 180,
    [EntityType.LANGUAGE]: 170,
    [EntityType.RELIGION]: 160,
    [EntityType.DYNASTY]: 150,
    [EntityType.KINGDOM]: 160,
    [EntityType.EMPIRE]: 140,
  };

  score(entity: AfriseekEntity): number {

    const type = entity.entityType as EntityType;

    let score = 10;

    if (this.localityWeight[type]) {
      score += this.localityWeight[type]!;
    }

    if (this.culturalWeight[type]) {
      score += this.culturalWeight[type]!;
    }

    score += entity.relationships.length * 2;
    score += entity.facts.length * 1;

    if (entity.metadata?.featured) {
      score += 50;
    }

    return score;
  }
// ...

  sortNeighbors(
    _root: AfriseekEntity,
    neighbors: AfriseekEntity[]
  ): AfriseekEntity[] {

    return neighbors.sort((a, b) => {
      return this.score(b) - this.score(a);
    });
  }

  allowTraversal(
    from: AfriseekEntity,
    to: AfriseekEntity
  ): boolean {

    const fromScore = this.score(from);
    const toScore = this.score(to);

    if (toScore > fromScore + 120) {
      return false;
    }

    return true;
  }
}
