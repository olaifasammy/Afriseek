import { getDependencies } from "../config/dependencies";

export class DuplicateNodeService {

  async getAll() {

    const entities =
      await getDependencies()
        .entityRepository
        .findAll();

    const groups =
      new Map<string, typeof entities>();

    for (
      const entity
      of entities
    ) {

      const key =
        `${entity.entityType}:${(entity.name ?? "").toLowerCase().trim()}`;

      const existing =
        groups.get(key) ?? [];

      existing.push(entity);

      groups.set(
        key,
        existing
      );
    }

    return [
      ...groups.values()
    ].filter(
      group =>
        group.length > 1
    ).map(
      group => ({
        entityType:
          group[0].entityType,
        name:
          group[0].name,
        count:
          group.length,
        entities:
          group.map(
            entity => ({
              id: entity.id,
              slug: entity.slug
            })
          )
      })
    );
  }
}
