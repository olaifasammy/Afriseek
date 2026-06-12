import { Router } from "express";
import { getDependencies } from "../config/dependencies";
import { createKnowledgeGraph } from "../bootstrap/createKnowledgeGraph";

import { GraphController } from "../controllers/GraphController";
import { GraphEngine } from "../core/graph/GraphEngine";

import { EntityService } from "../services/EntityService";
import { DiscoveryEngine } from "../core/intelligence/DiscoveryEngine";
import { GraphPathFinder } from "../core/graph/GraphPathFinder";
import { GraphRecommendationEngine } from "../core/recommendation/GraphRecommendationEngine";
import { NarrativeEngine } from "../core/intelligence/NarrativeEngine";

const router = Router();

// 1. Re-instantiate stateful graph structure
const graph = createKnowledgeGraph();

// 2. Initialize analysis engines
const discovery = new DiscoveryEngine();
const pathFinder = new GraphPathFinder(graph);
const recommender = new GraphRecommendationEngine(graph);
const narrativeEngine = new NarrativeEngine();

// 3. Mount foundational orchestration engine
const engine = new GraphEngine(
  graph,
  discovery,
  pathFinder,
  recommender
);

// 4. Wrap the injected Repository back into the required EntityService class
const entityServiceWrapper = new EntityService(getDependencies().entityRepository);

// 5. Construct the Controller with the correctly typed service wrapper
const controller = new GraphController(
  engine,
  entityServiceWrapper,
  narrativeEngine
);

// 6. Establish API network route mappings
router.get("/path", controller.getPath);
router.get("/recommend/:slug", controller.getRecommendations);
router.get("/:slug", controller.getGraph);

export default router;
