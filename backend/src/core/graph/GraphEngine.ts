import { KnowledgeGraph } from "./KnowledgeGraph";
import { DiscoveryEngine } from "../intelligence/DiscoveryEngine";

export class GraphEngine {

  private discovery = new DiscoveryEngine();

  constructor(
    private graph: KnowledgeGraph
  ) {}

  async search(query: string) {
    return this.graph.search(query);
  }

  async explore(entityId: string) {
    return this.graph.getNeighbors(entityId);
  }

  async deepDive(entityId: string, depth = 2) {

    const root = await this.graph.getEntity(entityId);

    if (!root) return [];

    const related = await this.graph.getRelated(entityId, depth);

    return this.discovery.discover(root, related);
  }
}
