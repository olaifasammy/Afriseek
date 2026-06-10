import { AfriseekEntity } from "./entity";

export interface GraphNode {
  id: string;
  entity: AfriseekEntity;
}

export interface GraphEdge {
  sourceId: string;
  targetId: string;
  type: string;
  weight?: number;
}
