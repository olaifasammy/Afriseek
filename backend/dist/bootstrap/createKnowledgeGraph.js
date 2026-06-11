"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKnowledgeGraph = createKnowledgeGraph;
const RepositoryKnowledgeGraph_1 = require("../core/graph/implementations/RepositoryKnowledgeGraph");
const createEntityRepository_1 = require("./createEntityRepository");
function createKnowledgeGraph() {
    return new RepositoryKnowledgeGraph_1.RepositoryKnowledgeGraph((0, createEntityRepository_1.createEntityRepository)());
}
