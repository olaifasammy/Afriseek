import { getDependencies } from "../config/dependencies";

export class OrphanEntityService {

  async getAll() {

    const entities =
      await getDependencies()
        .entityRepository
        .findAll();

    return entities.filter(
      entity =>
        !entity.relationships ||
        entity.relationships.length === 0
    );
  }
}
