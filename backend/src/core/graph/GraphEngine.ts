import { KnowledgeGraph } from "./KnowledgeGraph";

export class GraphEngine {

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
    return this.graph.getRelated(entityId, depth);
  }
}
