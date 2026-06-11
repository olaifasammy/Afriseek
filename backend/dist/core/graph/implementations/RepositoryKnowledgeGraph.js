"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryKnowledgeGraph = void 0;
class RepositoryKnowledgeGraph {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getEntity(id) {
        return this.repository.findById(id);
    }
    async search(query) {
        const entities = await this.repository.findAll();
        const normalized = query.toLowerCase();
        return entities.filter(entity => entity.name
            .toLowerCase()
            .includes(normalized));
    }
    async getNeighbors(entityId) {
        const entity = await this.repository.findById(entityId);
        if (!entity) {
            return [];
        }
        const all = await this.repository.findAll();
        const map = new Map(all.map(e => [e.id, e]));
        return entity.relationships
            .map(r => map.get(r.targetId))
            .filter((e) => e !== undefined);
    }
    async getIncomingNeighbors(entityId) {
        const all = await this.repository.findAll();
        return all.filter(entity => entity.relationships.some(relationship => relationship.targetId ===
            entityId));
    }
    async getRelated(entityId, depth = 2) {
        const all = await this.repository.findAll();
        const map = new Map(all.map(e => [e.id, e]));
        const visited = new Set();
        const results = [];
        const traverse = (id, currentDepth) => {
            if (currentDepth > depth) {
                return;
            }
            if (visited.has(id)) {
                return;
            }
            visited.add(id);
            const entity = map.get(id);
            if (!entity) {
                return;
            }
            results.push(entity);
            for (const relation of entity.relationships) {
                traverse(relation.targetId, currentDepth + 1);
            }
        };
        traverse(entityId, 0);
        return results;
    }
}
exports.RepositoryKnowledgeGraph = RepositoryKnowledgeGraph;
