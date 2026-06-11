"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryEntityRepository = void 0;
const entities_1 = require("../../data/entities");
class InMemoryEntityRepository {
    async findById(id) {
        return (entities_1.entities.find(e => e.id === id) ?? null);
    }
    async findBySlug(slug) {
        return (entities_1.entities.find(e => e.slug === slug) ?? null);
    }
    async findAll() {
        return entities_1.entities;
    }
    async create() {
        throw new Error("Not supported in memory");
    }
    async update() {
        throw new Error("Not supported in memory");
    }
    async delete() {
        throw new Error("Not supported in memory");
    }
}
exports.InMemoryEntityRepository = InMemoryEntityRepository;
