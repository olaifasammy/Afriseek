import { UserRepository } from "../../repositories/UserRepository";

export class AuthService {

  constructor(
    private users: UserRepository
  ) {}

  async login(
    email: string,
    password: string
  ) {

    const user =
      await this.users.findByEmail(
        email
      );

    if (!user) {
      return null;
    }

    if (
      user.passwordHash !== password
    ) {
      return null;
    }

    return {
      id: user.id,
      username: user.username,
      role: user.role,
      secretKeyVerified:
        user.secretKeyVerified
    };
  }
}
