"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseEntityRepository = void 0;
const supabase_1 = require("../config/supabase");
class SupabaseEntityRepository {
    supabase = (0, supabase_1.getSupabase)();
    async findById(id) {
        throw new Error("Not implemented");
    }
    async findBySlug(slug) {
        throw new Error("Not implemented");
    }
    async findAll() {
        throw new Error("Not implemented");
    }
    async create(entity) {
        throw new Error("Not implemented");
    }
    async update(entity) {
        throw new Error("Not implemented");
    }
    async delete(id) {
        throw new Error("Not implemented");
    }
}
exports.SupabaseEntityRepository = SupabaseEntityRepository;
