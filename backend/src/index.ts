import dotenv from "dotenv";
dotenv.config();

import express from "express";
import helmet from "helmet";
import { initializeDependencies } from "./config/dependencies";
import { ontologyService } from "./modules/ontology/OntologyService";

import entityRoutes from "./routes/entityRoutes";
import graphRoutes from "./routes/graphRoutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import auditRoutes from "./routes/auditRoutes";
import settingsRoutes from "./routes/settingsRoutes";
import articleRoutes from "./routes/articleRoutes";
import searchRoutes from "./routes/searchRoutes";
import contextRoutes from "./routes/contextRoutes";
import eventRoutes from "./routes/eventRoutes";
import ontologyRoutes from "./routes/ontologyRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import timelineRoutes from "./routes/timelineRoutes";
import relationshipRoutes from "./routes/relationshipRoutes";

import { errorHandler } from "./middleware/errorHandler";

async function bootstrap() {
  const app = express();

  app.use(helmet());
  app.use(express.json());

  const PORT = process.env.PORT || 3000;

  try {
    initializeDependencies();
    await ontologyService.load();

    console.log("⚡ Afriseek Engine ready");
  } catch (error) {
    console.error("❌ Fatal bootstrap error:", error);
    process.exit(1);
  }

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use("/api/entities", entityRoutes);
  app.use("/api/graph", graphRoutes);
  app.use("/api/relationships", relationshipRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/audit", auditRoutes);
  app.use("/api/dashboard", dashboardRoutes);
  app.use("/api/timeline", timelineRoutes);
  app.use("/api/settings", settingsRoutes);
  app.use("/api/articles", articleRoutes);
  app.use("/api/search", searchRoutes);
  app.use("/api/context", contextRoutes);
  app.use("/api/events", eventRoutes);
  app.use("/api/ontology", ontologyRoutes);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("❌ Fatal crash:", err);
});
