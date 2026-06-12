import { EntityService }
from "./EntityService";

export class ContextExplorerService {

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

    const related =
      all.filter(entity =>

        entity.relationships.some(

          relation =>

            relation.targetId
            === root.id

        )

        ||

        root.relationships.some(

          relation =>

            relation.targetId
            === entity.id

        )

      );

    return {

      root,

      related
    };
  }
}
