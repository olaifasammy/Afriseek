import { getDependencies } from "../config/dependencies";
import { Fact } from "../types/fact";

export class EntityFactService {

  async getAll(
    entityId: string
  ) {

    const entity =
      await getDependencies()
        .entityRepository
        .findById(entityId);

    if (!entity) {
      throw new Error("Entity not found");
    }

    return entity.facts ?? [];
  }

  async create(
    entityId: string,
    fact: Fact
  ) {

    const repository =
      getDependencies()
        .entityRepository;

    const entity =
      await repository.findById(entityId);

    if (!entity) {
      throw new Error("Entity not found");
    }

    entity.facts.push(fact);

    await repository.update(entity);

    return fact;
  }

  async update(
    entityId: string,
    factId: string,
    payload: Partial<Fact>
  ) {

    const repository =
      getDependencies()
        .entityRepository;

    const entity =
      await repository.findById(entityId);

    if (!entity) {
      throw new Error("Entity not found");
    }

    entity.facts =
      entity.facts.map(
        fact =>
          fact.id === factId
            ? { ...fact, ...payload }
            : fact
      );

    await repository.update(entity);
  }

  async delete(
    entityId: string,
    factId: string
  ) {

    const repository =
      getDependencies()
        .entityRepository;

    const entity =
      await repository.findById(entityId);

    if (!entity) {
      throw new Error("Entity not found");
    }

    entity.facts =
      entity.facts.filter(
        fact => fact.id !== factId
      );

    await repository.update(entity);
  }
}
