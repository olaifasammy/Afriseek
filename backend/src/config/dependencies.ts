import { createEntityRepository } from "../bootstrap/createEntityRepository";
import { createUserRepository } from "../bootstrap/createUserRepository";
import { PasswordService } from "../modules/auth/PasswordService";
import { EntityRepository } from "../repositories/EntityRepository";
import { UserRepository } from "../repositories/UserRepository";

export interface AppDependencies {
  entityRepository: EntityRepository;
  userRepository: UserRepository;
  passwordService: PasswordService;
}

let container: AppDependencies | null = null;

export function initializeDependencies(): AppDependencies {
  if (container) {
    return container;
  }

  const entityRepository =
    createEntityRepository();

  const userRepository =
    createUserRepository();

  const passwordService =
    new PasswordService();

  container = {
    entityRepository,
    userRepository,
    passwordService
  };

  Object.freeze(container);

  return container;
}

export function getDependencies(): AppDependencies {
  if (!container) {
    throw new Error(
      "AppDependencies container accessed before lifecycle initialization. Ensure initializeDependencies() is triggered in index.ts."
    );
  }

  return container;
}
