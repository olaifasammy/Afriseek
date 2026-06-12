import { SupabaseEntityRepository } from "../repositories/SupabaseEntityRepository";
import { SupabaseUserRepository } from "../repositories/SupabaseUserRepository";
import { PasswordService } from "../services/PasswordService";
import { EntityRepository } from "../repositories/EntityRepository";
import { UserRepository } from "../repositories/UserRepository";

export interface AppDependencies {
  entityRepository: EntityRepository;
  userRepository: UserRepository;
  passwordService: PasswordService;
}

let container: AppDependencies | null = null;

/**
 * Initializes and freezes the live global production dependency container.
 */
export function initializeDependencies(): AppDependencies {
  if (container) {
    return container;
  }

  // 1. Instantiate the real production database engines we just built
  const entityRepository = new SupabaseEntityRepository();
  const userRepository = new SupabaseUserRepository();
  
  // 2. Instantiate the zero-dependency native scrypt crypto engine
  const passwordService = new PasswordService();

  container = {
    entityRepository,
    userRepository,
    passwordService
  };

  // Freeze the container object to guarantee runtime configuration immutability
  Object.freeze(container);
  return container;
}

/**
 * Safely fetches live application service bindings anywhere inside routes or controllers
 */
export function getDependencies(): AppDependencies {
  if (!container) {
    throw new Error(
      "AppDependencies container accessed before lifecycle initialization. Ensure initializeDependencies() is triggered in index.ts."
    );
  }
  return container;
}
