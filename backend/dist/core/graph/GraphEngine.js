"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphEngine = void 0;
class GraphEngine {
    graph;
    constructor(graph) {
        this.graph = graph;
    }
    async search(query) {
        return this.graph.search(query);
    }
    async explore(entityId) {
        return this.graph.getNeighbors(entityId);
    }
    async deepDive(entityId, depth = 2) {
        return this.graph.getRelated(entityId, depth);
    }
}
exports.GraphEngine = GraphEngine;
