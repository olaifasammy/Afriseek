"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createEntityRepository_1 = require("../bootstrap/createEntityRepository");
const express_1 = require("express");
const GraphController_1 = require("../controllers/GraphController");
const GraphEngine_1 = require("../core/graph/GraphEngine");
const createKnowledgeGraph_1 = require("../bootstrap/createKnowledgeGraph");
const EntityService_1 = require("../services/EntityService");
const router = (0, express_1.Router)();
/**
 * Repository + service wiring
 */
const repository = (0, createEntityRepository_1.createEntityRepository)();
const entityService = new EntityService_1.EntityService(repository);
const graph = (0, createKnowledgeGraph_1.createKnowledgeGraph)();
const engine = new GraphEngine_1.GraphEngine(graph);
const controller = new GraphController_1.GraphController(engine, entityService);
router.get("/:slug", controller.getGraph);
exports.default = router;
