import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import { initializeDependencies } from "./config/dependencies";
import { errorHandler } from "./middleware/errorHandler";
import { discoverRoutes } from "./routes/loader";
import path from "path";

import { pinoHttp } from 'pino-http';
import { logger } from './config/logger';
import { env } from './config/env';

async function bootstrap() {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(pinoHttp({ logger }));

  const PORT = env.PORT;

  try {
    await initializeDependencies();
    // await ontologyService.load();
    
    // Dynamically register routes
    const srcDir = path.join(__dirname);
    const discoveredRoutes = discoverRoutes(srcDir);
    
    for (const route of discoveredRoutes) {
      try {
        // Import the router dynamically
        const router = require(route.filePath).default;
        app.use(route.path, router);
      } catch (error) {
        logger.error({ err: error }, `❌ Failed to register route: ${route.path}`);
      }
    }

    logger.info("⚡ Connect Africa Engine ready");
  } catch (error) {
    logger.error({ err: error }, "❌ Fatal bootstrap error:");
    process.exit(1);
  }

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use(errorHandler);

  app.listen(PORT, () => {
    logger.info(`🚀 Server running on http://localhost:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("❌ Fatal crash:", err);
});
