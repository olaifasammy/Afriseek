import { User } from "../types/user";
import { UserRepository } from "../core/repositories/UserRepository";

export class UserService {

  constructor(
    private repository: UserRepository
  ) {}

  async getAll() {
    return this.repository.findAll();
  }

  async getById(
    id: string
  ) {
    return this.repository.findById(
      id
    );
  }

  async getByEmail(
    email: string
  ) {
    return this.repository.findByEmail(
      email
    );
  }

  async create(
    user: User
  ) {
    return this.repository.create(
      user
    );
  }

  async update(
    user: User
  ) {
    return this.repository.update(
      user
    );
  }

  async delete(
    id: string
  ) {
    return this.repository.delete(
      id
    );
  }
}
