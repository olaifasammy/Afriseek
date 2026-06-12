import { UserRepository } from "../repositories/UserRepository";
import { SeedUserRepository } from "../repositories/SeedUserRepository";

export function createUserRepository(): UserRepository {

  return new SeedUserRepository();
}
