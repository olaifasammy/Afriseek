import { AfriseekEntity } from "../../types/entity";
import { EntityRepository } from "../../core/repositories/EntityRepository";

export class EntityDuplicateDetector {
  constructor(private repository: EntityRepository) {}

  async detect(entity: AfriseekEntity): Promise<AfriseekEntity | null> {
    const all = await this.repository.findAll();
    return all.find(e => e.name === entity.name && e.entityType === entity.entityType && e.id !== entity.id) || null;
  }
}
