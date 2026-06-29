import { logger } from "../../config/logger";
import { Request, Response } from "express";
import { getDependencies } from "../../config/dependencies";
import crypto from "crypto";
import { JwtService } from "./JwtService";
import { UserRole } from "../../types/role";

export const AuthController = {
  register: async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      const { userRepository, passwordService, emailService } = getDependencies();

      if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: "Username, email, and password are required." });
      }

      const existingUser = await userRepository.findByEmail(email);
      if (existingUser) {
        return res.status(409).json({ success: false, message: "Email is already registered." });
      }

      const passwordHash = await passwordService.hash(password);

      const newUser = {
        id: crypto.randomUUID(),
        username,
        email,
        passwordHash,
        role: "user" as UserRole,
        active: true,
        isEmailVerified: false,
        metadata: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      };

      await userRepository.create(newUser);
      
      // Send verification email
      await emailService.sendVerificationEmail(newUser.id, newUser.email);

      return res.status(201).json({ 
        success: true, 
        message: "User registered successfully. Please check your email to verify your account.",
        userId: newUser.id 
      });

    } catch (error) {
      logger.error({ error }, "❌ Registration Error");
      return res.status(500).json({ success: false, message: "Internal server error during registration." });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const { userRepository, passwordService } = getDependencies();

      if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required." });
      }

      const user = await userRepository.findByEmail(email);
      if (!user) {
        return res.status(401).json({ success: false, message: "Invalid credentials." });
      }

      const isValid = await passwordService.verify(password, user.passwordHash);
      if (!isValid) {
        return res.status(401).json({ success: false, message: "Invalid credentials." });
      }

      if (!user.isEmailVerified) {
        return res.status(403).json({ success: false, message: "Please verify your email address before logging in." });
      }

      if (user.secretKeyVerified) {
        return res.json({ success: true, message: "MFA token required.", requireMfa: true });
      }

      const { passwordHash, secretKeyHash, ...safeUser } = user;
      const jwtService = new JwtService();
      const token = jwtService.generateToken({
        userId: user.id,
        role: user.role
      });

      return res.json({ 
        success: true, 
        message: "Login successful.",
        token,
        user: safeUser 
      });

    } catch (error) {
      logger.error({ error }, "❌ Login Error");
      return res.status(500).json({ success: false, message: "Internal server error during login." });
    }
  },

  loginMfa: async (req: Request, res: Response) => {
    try {
      const { email, token } = req.body;
      const { userRepository, mfaService } = getDependencies();

      const user = await userRepository.findByEmail(email);
      if (!user || !user.secretKeyHash) {
        return res.status(401).json({ success: false, message: "Invalid credentials." });
      }

      const verified = mfaService.verifyToken(user.secretKeyHash, token);
      if (!verified) {
        return res.status(401).json({ success: false, message: "Invalid MFA token." });
      }

      const { passwordHash, secretKeyHash, ...safeUser } = user;
      const jwtService = new JwtService();
      const accessToken = jwtService.generateToken({
        userId: user.id,
        role: user.role
      });

      return res.json({ 
        success: true, 
        message: "Login successful.",
        token: accessToken,
        user: safeUser 
      });
    } catch (error) {
      logger.error({ error }, "❌ MFA Login Error");
      return res.status(500).json({ success: false, message: "Internal server error during MFA login." });
    }
  },

  setupMfa: async (req: Request, res: Response) => {
    try {
      const { mfaService, userRepository } = getDependencies();
      const user = (req as any).user;

      const userData = await userRepository.findById(user.userId);
      if (!userData) {
        return res.status(404).json({ success: false, message: "User not found." });
      }

      const secret = mfaService.generateSecret();
      const otpAuthUrl = mfaService.generateOtpUri(secret.base32, userData.email);

      const updatedUser = {
        ...userData,
        secretKeyHash: secret.base32,
        secretKeyVerified: false
      };
      await userRepository.update(updatedUser);

      return res.json({ success: true, otpAuthUrl });
    } catch (error) {
      logger.error({ error }, "❌ MFA Setup Error");
      return res.status(500).json({ success: false, message: "Internal server error during MFA setup." });
    }
  },

  verifyMfa: async (req: Request, res: Response) => {
    try {
      const { mfaService, userRepository } = getDependencies();
      const user = (req as any).user;
      const { token } = req.body;

      const userData = await userRepository.findById(user.userId);
      if (!userData || !userData.secretKeyHash) {
        return res.status(400).json({ success: false, message: "MFA not set up." });
      }

      const verified = mfaService.verifyToken(userData.secretKeyHash, token);
      if (!verified) {
        return res.status(401).json({ success: false, message: "Invalid MFA token." });
      }

      const updatedUser = {
        ...userData,
        secretKeyVerified: true
      };
      await userRepository.update(updatedUser);

      return res.json({ success: true, message: "MFA verified successfully." });
    } catch (error) {
      logger.error({ error }, "❌ MFA Verification Error");
      return res.status(500).json({ success: false, message: "Internal server error during MFA verification." });
    }
  },

  verifyEmail: async (req: Request, res: Response) => {
    try {
      const { token } = req.query;
      if (!token || typeof token !== "string") {
        return res.status(400).json({ success: false, message: "Invalid or missing token." });
      }

      const { emailService } = getDependencies();
      const verified = await emailService.verifyEmail(token);

      if (!verified) {
        return res.status(400).json({ success: false, message: "Verification failed. The link may have expired or is invalid." });
      }

      return res.json({ success: true, message: "Email verified successfully. You can now log in." });

    } catch (error) {
      logger.error({ error }, "❌ Email Verification Error");
      return res.status(500).json({ success: false, message: "Internal server error during email verification." });
    }
  },

  logout: async (req: Request, res: Response) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(400).json({ success: false, message: "Token required." });
      }

      const token = authHeader.split(" ")[1];
      const { revokedTokenRepository } = getDependencies();
      
      // For now we'll use a default expiration, but this should be extracted from the JWT.
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); 

      await revokedTokenRepository.revoke(token, expiresAt);

      return res.json({ success: true, message: "Logged out successfully." });
    } catch (error) {
      logger.error({ error }, "❌ Logout Error");
      return res.status(500).json({ success: false, message: "Internal server error during logout." });
    }
  },

  requestPasswordReset: async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      const { userRepository, passwordService, emailService } = getDependencies();

      const user = await userRepository.findByEmail(email);
      if (!user) {
        // Return 200 to prevent user enumeration
        return res.json({ success: true, message: "If an account exists, a reset link has been sent." });
      }

      const resetToken = passwordService.generateResetToken();
      const resetTokenHash = passwordService.hashResetToken(resetToken);
      const resetTokenExpires = new Date(Date.now() + 3600000); // 1 hour

      await userRepository.update({
        ...user,
        resetToken: resetTokenHash,
        resetTokenExpires: resetTokenExpires.toISOString()
      });

      await emailService.sendPasswordResetEmail(user.email, resetToken);

      return res.json({ success: true, message: "If an account exists, a reset link has been sent." });
    } catch (error) {
      logger.error({ error }, "❌ Password Reset Request Error");
      return res.status(500).json({ success: false, message: "Internal server error." });
    }
  },

  resetPassword: async (req: Request, res: Response) => {
    try {
      const { token, password } = req.body;
      const { userRepository, passwordService } = getDependencies();

      const resetTokenHash = passwordService.hashResetToken(token);
      const user = await userRepository.findByResetToken(resetTokenHash);

      if (!user || !user.resetTokenExpires || new Date(user.resetTokenExpires) < new Date()) {
        return res.status(400).json({ success: false, message: "Invalid or expired token." });
      }

      const passwordHash = await passwordService.hash(password);

      await userRepository.update({
        ...user,
        passwordHash,
        resetToken: undefined,
        resetTokenExpires: undefined
      });

      return res.json({ success: true, message: "Password reset successfully." });
    } catch (error) {
      logger.error({ error }, "❌ Password Reset Error");
      return res.status(500).json({ success: false, message: "Internal server error." });
    }
  }
};
