import { AfriseekEntity }
from "../../types/entity";

export interface KnowledgeGraph {

  getEntity(
    id: string
  ): Promise<AfriseekEntity | null>;

  search(
    query: string
  ): Promise<AfriseekEntity[]>;

  getNeighbors(
    entityId: string
  ): Promise<AfriseekEntity[]>;

  getIncomingNeighbors(
    entityId: string
  ): Promise<AfriseekEntity[]>;

  getRelated(
    entityId: string,
    depth?: number
  ): Promise<AfriseekEntity[]>;
}
