import { Source } from "../types/source";
import { getDependencies } from "../config/dependencies";

export class EntitySourceService {

  async getAll(
    entityId: string
  ) {

    const entity =
      await getDependencies()
        .entityRepository
        .findById(entityId);

    if (!entity) {
      throw new Error(
        "Entity not found"
      );
    }

    return entity.sources || [];
  }

  async create(
    entityId: string,
    source: Source
  ) {

    const repository =
      getDependencies()
        .entityRepository;

    const entity =
      await repository.findById(
        entityId
      );

    if (!entity) {
      throw new Error(
        "Entity not found"
      );
    }

    entity.sources.push(source);

    await repository.update(entity);

    return source;
  }

  async update(
    entityId: string,
    sourceId: string,
    payload: Partial<Source>
  ) {

    const repository =
      getDependencies()
        .entityRepository;

    const entity =
      await repository.findById(
        entityId
      );

    if (!entity) {
      throw new Error(
        "Entity not found"
      );
    }

    entity.sources =
      entity.sources.map(
        source =>
          source.id === sourceId
            ? {
                ...source,
                ...payload
              }
            : source
      );

    await repository.update(entity);
  }

  async delete(
    entityId: string,
    sourceId: string
  ) {

    const repository =
      getDependencies()
        .entityRepository;

    const entity =
      await repository.findById(
        entityId
      );

    if (!entity) {
      throw new Error(
        "Entity not found"
      );
    }

    entity.sources =
      entity.sources.filter(
        source =>
          source.id !== sourceId
      );

    await repository.update(entity);
  }
}
