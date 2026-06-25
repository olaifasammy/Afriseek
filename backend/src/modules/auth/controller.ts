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

      const { passwordHash, ...safeUser } = user;
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
  }
};
