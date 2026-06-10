"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityService = void 0;
class EntityService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getById(id) {
        return this.repository.findById(id);
    }
    async getBySlug(slug) {
        return this.repository.findBySlug(slug);
    }
    async getAll() {
        return this.repository.findAll();
    }
    async create(entity) {
        await this.repository.create(entity);
    }
    async update(entity) {
        await this.repository.update(entity);
    }
    async delete(id) {
        await this.repository.delete(id);
    }
}
exports.EntityService = EntityService;
