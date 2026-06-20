import { getDependencies } from "../config/dependencies";

export class EntityArticleLinkService {

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

return entity.metadata.articleIds ?? [];

}

async create(
entityId: string,
articleId: string
) {

const repository =
  getDependencies()
    .entityRepository;

const entity =
  await repository.findById(entityId);

if (!entity) {
  throw new Error("Entity not found");
}

const metadata =
  entity.metadata as any;

metadata.articleIds ??= [];

if (
  !metadata.articleIds.includes(
    articleId
  )
) {
  metadata.articleIds.push(
    articleId
  );
}

await repository.update(entity);

return metadata.articleIds;

}

async delete(
entityId: string,
articleId: string
) {

const repository =
  getDependencies()
    .entityRepository;

const entity =
  await repository.findById(entityId);

if (!entity) {
  throw new Error("Entity not found");
}

const metadata =
  entity.metadata as any;

metadata.articleIds =
  (metadata.articleIds ?? [])
    .filter(
      (id: string) =>
        id !== articleId
    );

await repository.update(entity);

}
}
