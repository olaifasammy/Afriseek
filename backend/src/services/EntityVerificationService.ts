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
}
