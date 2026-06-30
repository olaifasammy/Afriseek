import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middleware/errorHandler";
import { discoverRoutes } from "./routes/loader";
import { HealthService } from "./services/HealthService";
import path from "path";
import { pinoHttp } from 'pino-http';
import { logger } from './config/logger';

export const app = express();
const healthService = new HealthService();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(pinoHttp({ logger }));

// Function to initialize routes, called in index.ts
export const initializeAppRoutes = async () => {
    const srcDir = path.join(__dirname);
    const discoveredRoutes = discoverRoutes(srcDir, '/api/v1');
    
    for (const route of discoveredRoutes) {
      const router = require(route.filePath).default;
      app.use(route.path, router);
      logger.info(`Registered route: ${route.path}`);
    }
    
    app.get("/health", async (_req, res) => {
        const health = await healthService.check();
        res.status(health.status === "UP" ? 200 : 503).json(health);
    });
    
    app.use(errorHandler);
};
