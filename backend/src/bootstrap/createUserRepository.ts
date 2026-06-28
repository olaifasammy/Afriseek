import { UserRepository } from "../core/repositories/UserRepository";
import { PostgreSQLUserRepository } from "../infrastructure/repositories/postgres/PostgreSQLUserRepository";

export function createUserRepository(): UserRepository {
  return new PostgreSQLUserRepository();
}
