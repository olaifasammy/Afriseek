export interface SearchQuery {

  text: string;

  limit?: number;

  offset?: number;

  entityTypes?: string[];
}
