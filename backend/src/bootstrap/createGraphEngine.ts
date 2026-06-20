import { createKnowledgeGraph } from "./createKnowledgeGraph";
import { GraphEngine } from "../core/graph/GraphEngine";
import { DiscoveryEngine } from "../core/intelligence/DiscoveryEngine";
import { GraphPathFinder } from "../core/graph/GraphPathFinder";
import { GraphRecommendationEngine } from "../core/recommendation/GraphRecommendationEngine";

let instance: GraphEngine | null = null;

export function createGraphEngine(): GraphEngine {
  if (instance) return instance;

  const graph = createKnowledgeGraph();

  instance = new GraphEngine(
    graph,
    new DiscoveryEngine(),
    new GraphPathFinder(graph),
    new GraphRecommendationEngine(graph)
  );

  return instance;
}
