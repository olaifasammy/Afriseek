export interface GraphRelatedItem {
  name: string;
  type: string;
  score: number;
  reasoning: string[];
}

export interface GraphResponse {
  entity: {
    id: string;
    name: string;
    type: string;
  };

  related: GraphRelatedItem[];
}
