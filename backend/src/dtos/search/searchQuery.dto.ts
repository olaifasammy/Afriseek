export interface SearchQueryDto {
  query: string;
  entityType?: string;
  page?: number;
  limit?: number;
  filters?: Record<string, any>;
}
