"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitySchema = void 0;
const zod_1 = require("zod");
exports.EntitySchema = zod_1.z.object({
    id: zod_1.z.string(),
    slug: zod_1.z.string(),
    name: zod_1.z.string(),
    entityType: zod_1.z.string(),
    summary: zod_1.z.string(),
    traits: zod_1.z.record(zod_1.z.string(), zod_1.z.any()),
    relationships: zod_1.z.array(zod_1.z.any()),
    sources: zod_1.z.array(zod_1.z.any())
});
