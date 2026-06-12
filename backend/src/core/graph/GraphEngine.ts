import { KnowledgeGraph } from "./KnowledgeGraph";
import { DiscoveryEngine } from "../intelligence/DiscoveryEngine";
import { GraphPathFinder } from "./GraphPathFinder";
import { GraphRecommendationEngine } from "../recommendation/GraphRecommendationEngine";
import { AfriseekEntity } from "../../types/entity";

export class GraphEngine {
  // FIX: Full Dependency Injection applied. Removes hardcoded engine instantiation.
  constructor(
    private readonly graph: KnowledgeGraph,
    private readonly discovery: DiscoveryEngine,
    private readonly pathFinder: GraphPathFinder,
    private readonly recommender: GraphRecommendationEngine
  ) {}

  async search(query: string) { return this.graph.search(query); }
  async explore(entityId: string) { return this.graph.getNeighbors(entityId); }
  async exploreIncoming(entityId: string) { return this.graph.getIncomingNeighbors(entityId); }
  async getEntity(entityId: string) { return this.graph.getEntity(entityId); }

  async deepDive(entityId: string, depth: number = 2, relationshipTypes?: string[]) {
    const root = await this.graph.getEntity(entityId);
    if (!root) return [];
    const related = await this.graph.getRelated(entityId, depth, relationshipTypes);
    return this.discovery.discover(root, related);
  }

  async recommend(entityId: string, limit: number = 10) {
    return this.recommender.recommend(entityId, limit);
  }

  async expandPath(entityId: string, steps: number = 3): Promise<AfriseekEntity[][]> {
    const root = await this.graph.getEntity(entityId);
    if (!root) return [];
    const result: AfriseekEntity[][] = [];
    let frontier: AfriseekEntity[] = [root];
    const visited = new Set<string>([root.id]);

    for (let i = 0; i < steps; i++) {
      const nextLayer: AfriseekEntity[] = [];
      for (const node of frontier) {
        const neighbors = await this.graph.getNeighbors(node.id);
        for (const neighbor of neighbors) {
          if (visited.has(neighbor.id)) continue;
          visited.add(neighbor.id);
          nextLayer.push(neighbor);
        }
      }
      if (nextLayer.length === 0) break;
      result.push(nextLayer);
      frontier = nextLayer;
    }
    return result;
  }

  async findPath(startId: string, endId: string) {
    return this.pathFinder.findPath(startId, endId);
  }
}