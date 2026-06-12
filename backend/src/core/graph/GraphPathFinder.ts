import { KnowledgeGraph } from "./KnowledgeGraph";

export class GraphPathFinder {
  constructor(private graph: KnowledgeGraph) {}

  async findPath(startId: string, endId: string): Promise<string[]> {
    if (startId === endId) return [startId];

    const visited = new Set<string>([startId]);
    const queue: string[] = [startId];
    
    // FIX: Using ParentMap instead of array spread loops prevents exponential memory GC leaks.
    const parentMap = new Map<string, string>(); 

    while (queue.length > 0) {
      const current = queue.shift()!;

      if (current === endId) {
        // Target found! Reconstruct the path backwards.
        const path: string[] = [];
        let currNode: string | undefined = current;
        while (currNode) {
          path.unshift(currNode);
          currNode = parentMap.get(currNode);
        }
        return path;
      }

      const neighbors = await this.graph.getNeighbors(current);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor.id)) {
          visited.add(neighbor.id);
          parentMap.set(neighbor.id, current);
          queue.push(neighbor.id);
        }
      }
    }
    return [];
  }
}