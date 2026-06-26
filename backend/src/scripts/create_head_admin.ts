import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../.env") });

import { initializeDependencies, getDependencies } from "../config/dependencies";
import { UserRole } from "../types/role";
import crypto from "crypto";
import { logger } from "../config/logger";

async function main() {
  try {
    logger.info("Initializing dependencies...");
    initializeDependencies();
    
    const { userRepository, passwordService, emailService } = getDependencies();
    
    const email = "Olaifasammy@gmail.com";
    const username = "Olaifa";
    const password = "Olaifa131@";
    
    logger.info(`Checking if user ${email} already exists...`);
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      logger.info(`User ${email} already exists. Deleting to start fresh...`);
      await userRepository.delete(existingUser.id);
    }
    
    logger.info("Hashing password...");
    const passwordHash = await passwordService.hash(password);
    
    const newUser = {
      id: crypto.randomUUID(),
      username,
      email,
      passwordHash,
      role: UserRole.HEAD_ADMIN,
      active: true,
      isEmailVerified: false,
      metadata: {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    };
    
    logger.info("Creating user in database...");
    await userRepository.create(newUser);
    
    logger.info("Sending verification email...");
    await emailService.sendVerificationEmail(newUser.id, newUser.email);
    
    logger.info(`✅ Success! Head admin user created and verification email sent to ${email}.`);
  } catch (error) {
    logger.error({ err: error }, "❌ Error creating head admin user:");
  }
}

main();
