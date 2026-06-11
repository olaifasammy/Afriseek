"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntityRepository = createEntityRepository;
const SeedEntityRepository_1 = require("../repositories/SeedEntityRepository");
const SupabaseEntityRepository_1 = require("../repositories/SupabaseEntityRepository");
function createEntityRepository() {
    if (process.env.USE_SUPABASE ===
        "true") {
        return new SupabaseEntityRepository_1.SupabaseEntityRepository();
    }
    return new SeedEntityRepository_1.SeedEntityRepository();
}
