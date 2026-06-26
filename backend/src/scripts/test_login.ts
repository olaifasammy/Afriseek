import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../.env") });

import { initializeDependencies, getDependencies } from "../config/dependencies";
import { logger } from "../config/logger";

async function testLogin() {
  try {
    logger.info("Initializing dependencies for login test...");
    initializeDependencies();
    
    const { userRepository, passwordService } = getDependencies();
    
    // Testing with the admin email created earlier
    const email = "Olaifasammy@gmail.com";
    const password = "Olaifa131@";
    
    logger.info(`Attempting login for: ${email}`);
    
    const user = await userRepository.findByEmail(email);
    if (!user) {
      logger.error("User not found in database.");
      return;
    }
    logger.info("User found.");

    const isValid = await passwordService.verify(password, user.passwordHash);
    if (!isValid) {
      logger.error("Password verification failed.");
      return;
    }
    logger.info("Password verified.");

    logger.info("Login test passed.");
  } catch (error) {
    logger.error({ err: error }, "❌ Login test failed with error:");
  }
}

testLogin();
