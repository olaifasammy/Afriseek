import { createEntityRepository } from "../bootstrap/createEntityRepository";
import { Router } from "express";

import { GraphController } from "../controllers/GraphController";
import { GraphEngine } from "../core/graph/GraphEngine";
import { createKnowledgeGraph } from "../bootstrap/createKnowledgeGraph";
import { EntityService } from "../services/EntityService";

const router = Router();

/**
 * Repository + service wiring
 */
const repository = createEntityRepository();

const entityService = new EntityService(repository);

const graph = createKnowledgeGraph();

const engine = new GraphEngine(graph);

const controller = new GraphController(engine, entityService);

router.get("/:slug", controller.getGraph);

export default router;
