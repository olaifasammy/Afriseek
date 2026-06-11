"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createKnowledgeGraph_1 = require("../bootstrap/createKnowledgeGraph");
const GraphEngine_1 = require("../core/graph/GraphEngine");
async function run() {
    const graph = (0, createKnowledgeGraph_1.createKnowledgeGraph)();
    const engine = new GraphEngine_1.GraphEngine(graph);
    console.log("\n=== RELATED (EXPLAINED + SCORED) ===\n");
    const result = await engine.deepDive("nigeria", 2);
    for (const item of result) {
        console.log("\n---");
        console.log(item.entity.name);
        console.log("Score:", item.score);
        console.log("Reasoning:");
        for (const line of item.explanation.breakdown) {
            console.log(" - " + line);
        }
    }
}
run();
