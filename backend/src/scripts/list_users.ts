import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../.env") });

import { initializeDependencies, getDependencies } from "../config/dependencies";
import { logger } from "../config/logger";

async function main() {
  try {
    initializeDependencies();
    const { userRepository } = getDependencies();
    const users = await userRepository.findAll();
    logger.info({ users }, "USERS_LIST:");
  } catch (error) {
    logger.error({ err: error }, "Error listing users:");
  }
}

main();
