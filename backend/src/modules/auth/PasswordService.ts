import bcrypt from "bcryptjs";
import crypto from "crypto";

export class PasswordService {
  private readonly rounds = 12;

  async hash(
    password: string
  ): Promise<string> {
    return bcrypt.hash(
      password,
      this.rounds
    );
  }

  async verify(
    password: string,
    hash: string
  ): Promise<boolean> {
    return bcrypt.compare(
      password,
      hash
    );
  }

  generateResetToken(): string {
    return crypto.randomBytes(32).toString("hex");
  }

  hashResetToken(token: string): string {
    return crypto.createHash("sha256").update(token).digest("hex");
  }
}
