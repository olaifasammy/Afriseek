"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactSchema = void 0;
const zod_1 = require("zod");
exports.FactSchema = zod_1.z.object({
    id: zod_1.z.string(),
    key: zod_1.z.string(),
    label: zod_1.z.string(),
    type: zod_1.z.string(),
    confidence: zod_1.z.string()
});
