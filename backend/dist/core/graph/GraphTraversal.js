"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphTraversal = void 0;
class GraphTraversal {
    entities;
    constructor(entities) {
        this.entities = entities;
    }
    getDirectConnections(entityId) {
        const entity = this.entities.get(entityId);
        if (!entity) {
            return [];
        }
        return entity.relationships.map(relation => relation.targetId);
    }
    traverse(startId, maxDepth = 2) {
        const results = [];
        const visited = new Set();
        const queue = [
            {
                entityId: startId,
                depth: 0,
                path: [startId]
            }
        ];
        while (queue.length > 0) {
            const current = queue.shift();
            if (!current) {
                continue;
            }
            if (current.depth > maxDepth) {
                continue;
            }
            if (visited.has(current.entityId)) {
                continue;
            }
            visited.add(current.entityId);
            results.push(current);
            const entity = this.entities.get(current.entityId);
            if (!entity) {
                continue;
            }
            for (const relation of entity.relationships) {
                queue.push({
                    entityId: relation.targetId,
                    depth: current.depth + 1,
                    path: [
                        ...current.path,
                        relation.targetId
                    ]
                });
            }
        }
        return results;
    }
}
exports.GraphTraversal = GraphTraversal;
