import { EntityService }
from "./EntityService";

export class GraphExplorerService {

  constructor(
    private entities:
      EntityService
  ) {}

  async explore(
    slug: string
  ) {

    const root =
      await this.entities.getBySlug(
        slug
      );

    if (!root) {
      return null;
    }

    const all =
      await this.entities.getAll();

    const children =
      root.relationships.map(
        relation => {

          const target =
            all.find(
              e =>
                e.id ===
                relation.targetId
            );

          return {
            relation:
              relation.type,
            entity:
              target || null
          };
        }
      );

    return {
      root,
      children
    };
  }
}
