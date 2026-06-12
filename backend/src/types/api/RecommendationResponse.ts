export interface RecommendationItem {
  id: string;
  slug: string;
  name: string;
  type: string;
  score: number;
  reasons: string[];
}

export interface RecommendationResponse {
  entity: {
    id: string;
    name: string;
    type: string;
  };

  recommendations:
    RecommendationItem[];
}
