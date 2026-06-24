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
      const { userRepository, passwordService } = getDependencies();

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
        metadata: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      };

      await userRepository.create(newUser);

      return res.status(201).json({ 
        success: true, 
        message: "User registered successfully.",
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
  }
};
