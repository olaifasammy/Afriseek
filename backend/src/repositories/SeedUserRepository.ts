import { UserRepository } from "./UserRepository";
import { User } from "../types/user";

export class SeedUserRepository
implements UserRepository {

  private users: User[] = [

    {
      id: "super-admin",

      username: "admin",

      email: "admin@afriseek.local",

      passwordHash: "admin123",

      role: "super_admin",

      secretKeyVerified: false,
      
      secretKeyHash:
      "AFRISEEK-MASTER-001",
      
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
