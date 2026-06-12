export interface ExpansionLayer {
  depth: number;
  entities: {
    id: string;
    name: string;
    type: string;
  }[];
}

export interface ExpansionResponse {
  root: string;
  layers: ExpansionLayer[];
}
