import { AfriseekEntity } from "../../types/entity";

export class GraphIndex {

  private byId =
    new Map<string, AfriseekEntity>();

  private incoming =
    new Map<string, AfriseekEntity[]>();

  constructor(
    entities: AfriseekEntity[]
  ) {

    for (const entity of entities) {

      this.byId.set(
        entity.id,
        entity
      );

      for (
        const relationship
        of entity.relationships
      ) {

        const bucket =
          this.incoming.get(
            relationship.targetId
          ) ?? [];

        bucket.push(entity);

        this.incoming.set(
          relationship.targetId,
          bucket
        );
      }
    }
  }

  getEntity(
    id: string
  ) {

    return (
      this.byId.get(id)
      ?? null
    );
  }

  getIncoming(
    id: string
  ) {

    return (
      this.incoming.get(id)
      ?? []
    );
  }
}
