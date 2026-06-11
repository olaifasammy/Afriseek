"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createKnowledgeGraph_1 = require("../bootstrap/createKnowledgeGraph");
const EntityPrinter_1 = require("../utils/EntityPrinter");
async function run() {
    const graph = (0, createKnowledgeGraph_1.createKnowledgeGraph)();
    console.log("\n=== SEARCH MISRATA ===\n");
    (0, EntityPrinter_1.printEntities)(await graph.search("misrata"));
    console.log("\n=== RELATED MISRATA ===\n");
    (0, EntityPrinter_1.printEntities)(await graph.getRelated("misrata", 2));
}
run();
