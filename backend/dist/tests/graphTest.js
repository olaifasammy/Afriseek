"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createKnowledgeGraph_1 = require("../bootstrap/createKnowledgeGraph");
const EntityPrinter_1 = require("../utils/EntityPrinter");
async function run() {
    const graph = (0, createKnowledgeGraph_1.createKnowledgeGraph)();
    console.log("\n=== SEARCH ===\n");
    (0, EntityPrinter_1.printEntities)(await graph.search("yoruba"));
    console.log("\n=== NEIGHBORS ===\n");
    (0, EntityPrinter_1.printEntities)(await graph.getNeighbors("yoruba"));
    console.log("\n=== RELATED ===\n");
    (0, EntityPrinter_1.printEntities)(await graph.getRelated("yoruba", 2));
}
run();
