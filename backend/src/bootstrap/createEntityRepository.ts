import { EntityRepository } from "../core/repositories/EntityRepository";
import { PostgreSQLEntityRepository } from "../infrastructure/repositories/postgres/PostgreSQLEntityRepository";

export function createEntityRepository(): EntityRepository {
  return new PostgreSQLEntityRepository();
}

