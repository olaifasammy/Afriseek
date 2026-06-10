"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKnowledgeGraph = createKnowledgeGraph;
const entities_1 = require("../data/entities");
const InMemoryKnowledgeGraph_1 = require("../core/graph/implementations/InMemoryKnowledgeGraph");
function createKnowledgeGraph() {
    const map = new Map();
    for (const entity of entities_1.entities) {
        map.set(entity.id, entity);
    }
    return new InMemoryKnowledgeGraph_1.InMemoryKnowledgeGraph(map);
}
