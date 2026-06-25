import { UserRepository } from "../core/repositories/UserRepository";
import { User } from "../types/user";
import { UserRole } from "../types/role";

export class SeedUserRepository
implements UserRepository {

  private users: User[] = [

    {
      id: "super-admin",

      username: "admin",

      email: "admin@afriseek.local",

      passwordHash: "$2b$12$f2lPCaCE9eLmgrcdmOwXG.n2lkbK8.knBj334SyFOV7myPOoIyw2q",

      role: UserRole.HEAD_ADMIN,

      isEmailVerified: true,
      
      active: true,

      metadata: {
        createdAt:
          new Date().toISOString(),

        updatedAt:
          new Date().toISOString()
      }
    }
  ];

  async findAll() {
    return this.users;
  }

  async findById(id: string) {
    return this.users.find(
      user => user.id === id
    ) || null;
  }

  async findByEmail(email: string) {
    return this.users.find(
      user => user.email === email
    ) || null;
  }

  async findByVerificationToken(token: string) {
    return this.users.find(
      user => user.emailVerificationToken === token
    ) || null;
  }

  async create(user: User) {
    this.users.push(user);
  }

  async update(user: User) {

    const index =
      this.users.findIndex(
        item => item.id === user.id
      );

    if (index >= 0) {
      this.users[index] = user;
    }
  }

  async delete(id: string) {

    this.users =
      this.users.filter(
        user => user.id !== id
      );
  }
}
