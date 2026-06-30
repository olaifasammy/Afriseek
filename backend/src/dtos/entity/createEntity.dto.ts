export interface CreateEntityDto {
  name: string;
  slug: string;
  entityType: string;
  summary: string;
  description: string;
  importance?: string;
  aliases?: string[];
  endonyms?: string[];
  exonyms?: string[];
}
