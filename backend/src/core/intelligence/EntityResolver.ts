import { AfriseekEntity } from "../../types/entity";

export class EntityResolver {

  resolve(
    query: string,
    entities: AfriseekEntity[]
  ): AfriseekEntity[] {

    const normalized =
      query.trim().toLowerCase();

    return entities.filter(entity => {

      if (
        entity.name
          .toLowerCase()
          .includes(normalized)
      ) {
        return true;
      }

      return (
        entity.aliases || []
      ).some(alias =>
        alias.name
          .toLowerCase()
          .includes(normalized)
      );
    });
  }
}
