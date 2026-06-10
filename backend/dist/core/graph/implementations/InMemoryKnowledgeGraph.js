"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryKnowledgeGraph = void 0;
class InMemoryKnowledgeGraph {
    entities;
    reverseIndex = new Map();
    constructor(entities) {
        this.entities = entities;
        this.buildReverseIndex();
    }
    buildReverseIndex() {
        for (const entity of this.entities.values()) {
            for (const relationship of entity.relationships) {
                const existing = this.reverseIndex.get(relationship.targetId) ?? [];
                existing.push(entity.id);
                this.reverseIndex.set(relationship.targetId, existing);
            }
        }
    }
    async getEntity(id) {
        return (this.entities.get(id)
            ?? null);
    }
    async search(query) {
        const normalized = query.toLowerCase();
        return Array.from(this.entities.values()).filter(entity => entity.name
            .toLowerCase()
            .includes(normalized));
    }
    async getNeighbors(entityId) {
        const entity = this.entities.get(entityId);
        if (!entity) {
            return [];
        }
        return entity.relationships
            .map(relation => this.entities.get(relation.targetId))
            .filter((entity) => entity !== undefined);
    }
    async getIncomingNeighbors(entityId) {
        const incomingIds = this.reverseIndex.get(entityId) ?? [];
        return incomingIds
            .map(id => this.entities.get(id))
            .filter((entity) => entity !== undefined);
    }
    async getRelated(entityId, depth = 2) {
        const visited = new Set();
        const results = [];
        const traverse = (currentId, currentDepth) => {
            if (currentDepth > depth) {
                return;
            }
            if (visited.has(currentId)) {
                return;
            }
            visited.add(currentId);
            const entity = this.entities.get(currentId);
            if (!entity) {
                return;
            }
            results.push(entity);
            for (const relationship of entity.relationships) {
                traverse(relationship.targetId, currentDepth + 1);
            }
            const incoming = this.reverseIndex.get(currentId) ?? [];
            for (const sourceId of incoming) {
                traverse(sourceId, currentDepth + 1);
            }
        };
        traverse(entityId, 0);
        return results;
    }
}
exports.InMemoryKnowledgeGraph = InMemoryKnowledgeGraph;
