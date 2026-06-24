import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import { initializeDependencies } from "./config/dependencies";
import { ontologyService } from "./modules/ontology/OntologyService";
import { errorHandler } from "./middleware/errorHandler";
import { discoverRoutes } from "./routes/loader";
import path from "path";

import { pinoHttp } from 'pino-http';
import { logger } from './config/logger';

async function bootstrap() {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(pinoHttp({ logger }));

  const PORT = process.env.PORT || 3000;

  try {
    initializeDependencies();
    await ontologyService.load();
    
    // Dynamically register routes
    const srcDir = path.join(__dirname);
    const discoveredRoutes = discoverRoutes(srcDir);
    
    for (const route of discoveredRoutes) {
      // Import the router dynamically
      const router = require(route.filePath).default;
      app.use(route.path, router);
      console.log(`Registered route: ${route.path}`);
    }

    console.log("⚡ Afriseek Engine ready");
  } catch (error) {
    console.error("❌ Fatal bootstrap error:", error);
    process.exit(1);
  }

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("❌ Fatal crash:", err);
});
