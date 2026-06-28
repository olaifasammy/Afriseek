import { EntityRepository } from "../../core/repositories/EntityRepository";
import { AfriseekEntity } from "../../types/entity";

export class EntityDuplicateDetectionService {
  constructor(private repository: EntityRepository) {}

  async findDuplicates(entity: AfriseekEntity): Promise<AfriseekEntity[]> {
    const allEntities = await this.repository.findAll();
    return allEntities.filter(
      (e) =>
        e.id !== entity.id &&
        (e.name.toLowerCase() === entity.name.toLowerCase() ||
          (e.aliases &&
            e.aliases.some((a) =>
              entity.aliases?.some((ea) => ea.name.toLowerCase() === a.name.toLowerCase())
            )))
    );
  }

  async scan(): Promise<AfriseekEntity[][]> {
    const allEntities = await this.repository.findAll();
    const duplicates: AfriseekEntity[][] = [];
    const processed = new Set<string>();

    for (const entity of allEntities) {
      if (processed.has(entity.id)) continue;
      const found = await this.findDuplicates(entity);
      if (found.length > 0) {
        duplicates.push([entity, ...found]);
        found.forEach((dup) => processed.add(dup.id));
        processed.add(entity.id);
      }
    }
    return duplicates;
  }
}
