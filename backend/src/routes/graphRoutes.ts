/* eslint-disable */
// @ts-nocheck
import { Router } from "express";
import { getDependencies } from "../config/dependencies";
import { createKnowledgeGraph } from "../bootstrap/createKnowledgeGraph";

import { GraphEngine } from "../core/graph/GraphEngine";

import { EntityService } from "../services/EntityService";
import { DiscoveryEngine } from "../core/intelligence/DiscoveryEngine";
import { GraphPathFinder } from "../core/graph/GraphPathFinder";
import { GraphRecommendationEngine } from "../core/recommendation/GraphRecommendationEngine";
import { NarrativeEngine } from "../core/intelligence/NarrativeEngine";

const router = Router();

const graph = createKnowledgeGraph();

const discovery = new DiscoveryEngine();
const pathFinder = new GraphPathFinder(graph);
const recommender = new GraphRecommendationEngine(graph);
const narrativeEngine = new NarrativeEngine();

const engine = new GraphEngine(
  graph,
  discovery,
  pathFinder,
  recommender
);

function createController() {
  const entityService = new EntityService(
    getDependencies().entityRepository
  );

  const Controller = require("../controllers/GraphController").GraphController;
  return new (Controller as any)(engine, entityService, narrativeEngine);
}

router.get("/path", (req, res) =>
  createController().getPath(req, res)
);

router.get("/recommend/:slug", (req, res) =>
  createController().getRecommendations(req, res)
);

router.get("/:slug", (req, res) =>
  createController().getGraph(req, res)
);

export default router;
