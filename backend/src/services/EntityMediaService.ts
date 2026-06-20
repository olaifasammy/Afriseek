import { getDependencies } from "../config/dependencies";

export class EntityMediaService {

async get(
entityId: string
) {

const entity =
  await getDependencies()
    .entityRepository
    .findById(entityId);

if (!entity) {
  throw new Error("Entity not found");
}

return entity.media ?? {};

}

async update(
entityId: string,
media: any
) {

const repository =
  getDependencies()
    .entityRepository;

const entity =
  await repository.findById(entityId);

if (!entity) {
  throw new Error("Entity not found");
}

entity.media = {
  ...entity.media,
  ...media
};

await repository.update(entity);

return entity.media;

}
}
