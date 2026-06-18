import { Request, Response } from "express";
import { getDependencies } from "../config/dependencies";
import crypto from "crypto";
import { JwtService } from "../modules/auth/JwtService";
import { UserRole } from "../types/role";

export class AuthController {
  
  register = async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      const { userRepository, passwordService } = getDependencies();

      // 1. Strict Input Validation
      if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: "Username, email, and password are required." });
      }

      // 2. Check for existing users (Enforce Unique Constraints)
      const existingUser = await userRepository.findByEmail(email);
      if (existingUser) {
        return res.status(409).json({ success: false, message: "Email is already registered." });
      }

      // 3. Secure Cryptographic Hashing
      const passwordHash = await passwordService.hash(password);

      // 4. Construct Domain-Compliant User Entity
      const newUser = {
        id: crypto.randomUUID(),
        username,
        email,
        passwordHash,
        role: "user" as UserRole, // Default role
        active: true,
        metadata: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      };

      // 5. Persist to Supabase
      await userRepository.create(newUser);

      return res.status(201).json({ 
        success: true, 
        message: "User registered successfully.",
        userId: newUser.id 
      });

    } catch (error) {
      console.error("❌ Registration Error:", error);
      return res.status(500).json({ success: false, message: "Internal server error during registration." });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const { userRepository, passwordService } = getDependencies();

      if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required." });
      }

      // 1. Fetch user from Supabase
      const user = await userRepository.findByEmail(email);
      console.log("LOGIN_USER", user);
      if (!user) {
        return res.status(401).json({ success: false, message: "Invalid credentials." });
      }

      // 2. Constant-time secure verification
      const isValid = await passwordService.verify(password, user.passwordHash);
      console.log("PASSWORD_VALID", isValid);
      if (!isValid) {
        return res.status(401).json({ success: false, message: "Invalid credentials." });
      }

      // 3. Strip sensitive data before sending back to the client
      const { passwordHash, ...safeUser } = user;

        const jwtService =
  new JwtService();

const token =
  jwtService.generateToken({
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
      console.error("❌ Login Error:", error);
      return res.status(500).json({ success: false, message: "Internal server error during login." });
    }
  };
}
