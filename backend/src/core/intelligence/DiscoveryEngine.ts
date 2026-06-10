import { AfriseekEntity } from "../../types/entity";

export class DiscoveryEngine {

  discover(
    entity: AfriseekEntity
  ): string[] {

    return entity.relationships.map(
      relationship =>
        relationship.targetId
    );
  }
}
