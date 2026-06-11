"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphEngine = void 0;
const DiscoveryEngine_1 = require("../intelligence/DiscoveryEngine");
class GraphEngine {
    graph;
    discovery = new DiscoveryEngine_1.DiscoveryEngine();
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
        const root = await this.graph.getEntity(entityId);
        if (!root)
            return [];
        const related = await this.graph.getRelated(entityId, depth);
        return this.discovery.discover(root, related);
    }
}
exports.GraphEngine = GraphEngine;
