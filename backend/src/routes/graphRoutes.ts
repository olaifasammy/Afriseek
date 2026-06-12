import { Router } from "express";
import { createEntityRepository } from "../bootstrap/createEntityRepository";
import { createKnowledgeGraph } from "../bootstrap/createKnowledgeGraph";

import { GraphController } from "../controllers/GraphController";
import { GraphEngine } from "../core/graph/GraphEngine";

import { EntityService } from "../services/EntityService";
import { DiscoveryEngine } from "../core/intelligence/DiscoveryEngine";
import { GraphPathFinder } from "../core/graph/GraphPathFinder";
import { GraphRecommendationEngine } from "../core/recommendation/GraphRecommendationEngine";
import { NarrativeEngine } from "../core/intelligence/NarrativeEngine";

const router = Router();

// -------------------------
// Infrastructure Layer
// -------------------------
const repository = createEntityRepository();
const entityService = new EntityService(repository);
const graph = createKnowledgeGraph();

// -------------------------
// Intelligence Layer
// -------------------------
const discovery = new DiscoveryEngine();
const pathFinder = new GraphPathFinder(graph);
const recommender = new GraphRecommendationEngine(graph);
const narrativeEngine = new NarrativeEngine();

// -------------------------
// Orchestrator
// -------------------------
const engine = new GraphEngine(
  graph,
  discovery,
  pathFinder,
  recommender
);

// -------------------------
// Controller Layer
// -------------------------
const controller = new GraphController(
  engine,
  entityService,
  narrativeEngine
);

// -------------------------
// Routes
// -------------------------
router.get("/path", controller.getPath);
router.get("/recommend/:slug", controller.getRecommendations);
router.get("/:slug", controller.getGraph);

export default router;