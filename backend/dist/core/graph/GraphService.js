"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphService = void 0;
class GraphService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async findEntity(slug) {
        return this.repository.getEntityBySlug(slug);
    }
    async getAllEntities() {
        return this.repository.getAllEntities();
    }
}
exports.GraphService = GraphService;
