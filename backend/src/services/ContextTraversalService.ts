import { EntityService }
from "./EntityService";

export class ContextTraversalService {

  constructor(
    private entities:
      EntityService
  ) {}

  async traverse(
    slug: string,
    depth = 3
  ) {

    const all =
      await this.entities.getAll();

    const root =
      all.find(
        e => e.slug === slug
      );

    if (!root) {
      return null;
    }

    const visited =
      new Set<string>();

    const results: any[] =
      [];

    const walk = (
      entityId: string,
      level: number
    ) => {

      if (
        level > depth
      ) {
        return;
      }

      if (
        visited.has(
          entityId
        )
      ) {
        return;
      }

      visited.add(
        entityId
      );

      const entity =
        all.find(
          e =>
            e.id === entityId
        );

      if (!entity) {
        return;
      }

      results.push({

        level,

        entity

      });

      entity.relationships.forEach(
        relation =>

          walk(
            relation.targetId,
            level + 1
          )
      );
    };

    walk(
      root.id,
      0
    );

    return results;
  }
}
