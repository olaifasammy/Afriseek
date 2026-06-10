import { AfriseekEntity } from "../types/entity";
import { EntityRepository } from "../repositories/EntityRepository";

export class SearchService {

  constructor(
    private repository: EntityRepository
  ) {}

  async search(
    query: string
  ): Promise<AfriseekEntity[]> {

    const entities =
      await this.repository.findAll();

    const normalized =
      query.toLowerCase().trim();

    return entities.filter(entity =>
      entity.name
        .toLowerCase()
        .includes(normalized)
    );
  }
}
