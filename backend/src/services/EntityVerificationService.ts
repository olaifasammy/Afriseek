import { getDependencies } from "../config/dependencies";

export class EntityVerificationService {

  async getStatus(
    entityId: string
  ) {

    const entity =
      await getDependencies()
        .entityRepository
        .findById(entityId);

    if (!entity) {
      return null;
    }

    return {
      entityId,
      verified:
        entity.metadata?.verified
        ?? false
    };
  }

  async updateStatus(
    entityId: string,
    verified: boolean
  ): Promise<boolean> {

    const repository =
      getDependencies()
        .entityRepository;

    const entity =
      await repository.findById(
        entityId
      );

    if (!entity) {
      return false;
    }

    entity.metadata = {
      ...entity.metadata,
      verified
    };

    await repository.update(
      entity
    );

    return true;
  }

  async archive(entityId: string): Promise<boolean> {
    const repository = getDependencies().entityRepository;
    const entity = await repository.findById(entityId);
    if (!entity) return false;

    entity.metadata = {
      ...entity.metadata,
      deletedAt: new Date().toISOString()
    };
    await repository.update(entity);
    return true;
  }

  async restore(entityId: string): Promise<boolean> {
    const repository = getDependencies().entityRepository;
    const entity = await repository.findById(entityId);
    if (!entity) return false;

    entity.metadata = {
      ...entity.metadata,
      deletedAt: undefined
    };
    await repository.update(entity);
    return true;
  }
}
