import { getDependencies } from "../../config/dependencies";

export class EntitySearchService {
  async search(query: string) {
    const { entityRepository } = getDependencies();

    const entities = await entityRepository.findAll();

    const q = query.toLowerCase();

    return entities.filter(
      e =>
        e.name.toLowerCase().includes(q) ||
        e.slug.toLowerCase().includes(q)
    );
  }
}
