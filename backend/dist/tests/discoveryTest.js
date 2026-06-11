"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../data/entities");
const DiscoveryEngine_1 = require("../core/intelligence/DiscoveryEngine");
const engine = new DiscoveryEngine_1.DiscoveryEngine();
const root = entities_1.entities.find(e => e.id === "nigeria");
if (!root)
    throw new Error("Nigeria not found");
const result = engine.discover(root, entities_1.entities);
console.log("\n=== DISCOVERY ===\n");
for (const item of result) {
    console.log("\n---");
    console.log(item.entity.name);
    console.log("Score:", item.score);
    console.log("Reasoning:");
    for (const line of item.explanation.breakdown) {
        console.log(" - " + line);
    }
}
