import { User } from "../../types/user";

export interface UserRepository {

  findAll(): Promise<User[]>;

  findById(
    id: string
  ): Promise<User | null>;

  findByEmail(
    email: string
  ): Promise<User | null>;

  findByVerificationToken(
    token: string
  ): Promise<User | null>;

  create(
    user: User
  ): Promise<void>;

  update(
    user: User
  ): Promise<void>;

  delete(
    id: string
  ): Promise<void>;
}
