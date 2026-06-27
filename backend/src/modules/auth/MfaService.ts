import speakeasy from "speakeasy";
import { EmailService } from "../../services/EmailService";
import { AuditService } from "../../services/AuditService";
import { logger } from "../../config/logger";

export class MfaService {
  constructor(
    private emailService: EmailService,
    private auditService: AuditService
  ) {}

  // Existing TOTP methods...
  generateSecret() {
    return speakeasy.generateSecret({ name: "ConnectAfrica" });
  }

  verifyToken(secret: string, token: string): boolean {
    return speakeasy.totp.verify({
      secret: secret,
      encoding: "base32",
      token: token
    });
  }

  // Email OTP methods
  async generateAndSendEmailOtp(actorId: string, email: string): Promise<string> {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // In production, store this OTP in the database with an expiration
    await this.emailService.sendEmail(email, "Your Connect Africa OTP", `Your OTP is ${otp}`);
    
    await this.auditService.log({
        id: `audit_${Date.now()}`,
        actorId,
        entityType: 'MFA',
        entityId: email,
        action: 'OTP_SENT',
        timestamp: new Date().toISOString()
    });
    logger.info({ email }, "Email OTP sent");
    return otp; // Returning for testing/simulation purposes
  }

  verifyEmailOtp(storedOtp: string, providedOtp: string): boolean {
    return storedOtp === providedOtp;
  }
}
