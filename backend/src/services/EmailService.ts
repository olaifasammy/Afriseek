import { randomBytes } from "crypto";
import { sendEmail } from "../config/email";
import { UserRepository } from "../core/repositories/UserRepository";
import { env } from "../config/env";

export class EmailService {
  constructor(private userRepository: UserRepository) {}

  async sendVerificationEmail(userId: string, email: string): Promise<void> {
    const token = randomBytes(32).toString("hex");
    const user = await this.userRepository.findById(userId);
    if (!user) throw new Error("User not found");

    user.emailVerificationToken = token;
    user.emailVerificationSentAt = new Date().toISOString();
    await this.userRepository.update(user);

    const verificationLink = `${env.APP_URL}/verify-email?token=${token}`;

    await this.sendEmail(
      email,
      "Verify your Connect Africa account",
      `Please verify your account by clicking this link: ${verificationLink}`,
      `<p>Please verify your account by clicking this link: <a href="${verificationLink}">Verify Email</a></p>`
    );
  }

  async sendEmail(to: string, subject: string, text: string, html: string): Promise<void> {
    await sendEmail(to, subject, text, html);
  }

  async sendPasswordResetEmail(email: string, token: string): Promise<void> {
    const resetLink = `${env.APP_URL}/reset-password?token=${token}`;

    await this.sendEmail(
      email,
      "Reset your Connect Africa password",
      `Reset your password by clicking this link: ${resetLink}`,
      `<p>Reset your password by clicking this link: <a href="${resetLink}">Reset Password</a></p>`
    );
  }

  async verifyEmail(token: string): Promise<boolean> {
    const user = await this.userRepository.findByVerificationToken(token);
    if (!user) return false;

    // Check token expiration (24 hours)
    if (user.emailVerificationSentAt) {
      const sentAt = new Date(user.emailVerificationSentAt).getTime();
      const now = new Date().getTime();
      const twentyFourHours = 24 * 60 * 60 * 1000;
      if (now - sentAt > twentyFourHours) {
        return false;
      }
    } else {
      return false;
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationSentAt = undefined;
    await this.userRepository.update(user);

    return true;
  }
}
