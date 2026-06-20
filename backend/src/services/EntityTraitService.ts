import { getDependencies } from "../config/dependencies";

export class EntityTraitService {

async getAll(entityId: string) {

const entity =
  await getDependencies()
    .entityRepository
    .findById(entityId);

if (!entity) {
  throw new Error("Entity not found");
}

return entity.traits ?? [];

}

async create(
entityId: string,
trait: any
) {

const repository =
  getDependencies()
    .entityRepository;

const entity =
  await repository.findById(entityId);

if (!entity) {
  throw new Error("Entity not found");
}

entity.traits.push(trait);

await repository.update(entity);

return trait;

}

async update(
entityId: string,
index: number,
payload: any
) {

const repository =
  getDependencies()
    .entityRepository;

const entity =
  await repository.findById(entityId);

if (!entity) {
  throw new Error("Entity not found");
}

entity.traits[index] = {
  ...entity.traits[index],
  ...payload
};

await repository.update(entity);

}

async delete(
entityId: string,
index: number
) {

const repository =
  getDependencies()
    .entityRepository;

const entity =
  await repository.findById(entityId);

if (!entity) {
  throw new Error("Entity not found");
}

entity.traits.splice(index, 1);

await repository.update(entity);

}
}
