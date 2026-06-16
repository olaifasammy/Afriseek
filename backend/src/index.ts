import express from "express";
import { initializeDependencies } from "./config/dependencies";
import { ontologyService }
from "./modules/ontology/OntologyService";

// Core Routing Architecture Components
import entityRoutes from "./routes/entityRoutes";
import graphRoutes from "./routes/graphRoutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import secretKeyRoutes from "./routes/secretKeyRoutes";
import auditRoutes from "./routes/auditRoutes";
import articleRoutes from "./routes/articleRoutes";
import searchRoutes from "./routes/searchRoutes";
import contextRoutes from "./routes/contextRoutes";
import eventRoutes from "./routes/eventRoutes";
import ontologyRoutes from "./routes/ontologyRoutes";

/**
 * Orchestrates the secure asynchronous bootstrap sequence of the Afriseek application engine.
 */
async function bootstrap() {
  const app = express();
  
  // Honor runtime hosting environments (e.g., Docker, Render, VPS) while preserving local 3000 fallback
  const PORT = process.env.PORT || 3000;

  // =========================================================================
  
  // 1. CORE LIFECYCLE INITIALIZATION
  // =========================================================================
  try {
    initializeDependencies();
    await ontologyService.load();
    console.log("⚡ [Afriseek Engine]: Graph & Auth relational repositories securely bound to Supabase.");
  } catch (error) {
    console.error("❌ [Fatal Bootstrap Error]: Core dependency injection sequence failed:", error);
    // Explicit non-zero status exit guarantees task runner/orchestrators know the app is broken
    process.exit(1);
  }

  // =========================================================================
  // 2. GLOBAL ROUTING MIDDLEWARE
  // =========================================================================
  app.use(express.json());

  // =========================================================================
  // 3. TELEMETRY & HEALTH SYSTEM
  // =========================================================================
  app.get("/health", (_req, res) => {
    res.status(200).json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });

  // =========================================================================
  // 4. API SUBSYSTEM ROUTING MOUNTS
  // =========================================================================
  app.use("/api/entities", entityRoutes);
  app.use("/api/graph", graphRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/secret-key", secretKeyRoutes);
  app.use("/api/audit", auditRoutes);
  app.use("/api/articles", articleRoutes);
  app.use("/api/search", searchRoutes);
  app.use("/api/context", contextRoutes);
  app.use("/api/events", eventRoutes);
  app.use("/api/ontology", ontologyRoutes);

  // =========================================================================
  // 5. PORTS & INTERFACE EXECUTION
  // =========================================================================
  app.listen(PORT, () => {
    console.log(`🚀 [Afriseek Server Live]: Operating smoothly on port http://localhost:${PORT}`);
  });
}

// Intercept unhandled promise runtime exceptions across the main initialization loop
bootstrap().catch((error) => {
  console.error("❌ [Fatal Async Crash]: Unhandled exception caught inside engine lifecycle root:", error);
  process.exit(1);
});
