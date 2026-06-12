import { AfriseekEntity } from "../../types/entity";
import { EntityType } from "../../types/enums/EntityType";

export class CulturalGraphBiasEngine {

  private localityWeight: Record<string, number> = {
    village: 100,
    town: 110,
    city: 120,
    district: 130,
    local_government: 140,
    state: 160,
    province: 160,
    country: 180,
    continent: 200
  };

  private culturalWeight: Record<string, number> = {
    tribe: 180,
    ethnic_group: 180,
    language: 170,
    religion: 160,
    dynasty: 150,
    kingdom: 160,
    empire: 140,
    cultural: 150
  };

  score(entity: AfriseekEntity): number {

    const type = entity.entityType as string;

    let score = 10;

    if (this.localityWeight[type]) {
      score += this.localityWeight[type];
    }

    if (this.culturalWeight[type]) {
      score += this.culturalWeight[type];
    }

    score += entity.relationships.length * 2;
    score += entity.facts.length * 1;

    if (entity.metadata?.featured) {
      score += 50;
    }

    return score;
  }

  sortNeighbors(
    root: AfriseekEntity,
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
