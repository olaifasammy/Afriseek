"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedEntityRepository = void 0;
const entities_1 = require("../data/entities");
class SeedEntityRepository {
    async findById(id) {
        return (entities_1.entities.find(e => e.id === id) ?? null);
    }
    async findBySlug(slug) {
        return (entities_1.entities.find(e => e.slug === slug) ?? null);
    }
    async findAll() {
        return entities_1.entities;
    }
    async create() { }
    async update() { }
    async delete() { }
}
exports.SeedEntityRepository = SeedEntityRepository;
