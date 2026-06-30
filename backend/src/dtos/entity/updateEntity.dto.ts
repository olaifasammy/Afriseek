export interface UpdateEntityDto {
  name?: string;
  summary?: string;
  importance?: string;
  aliases?: string[];
  endonyms?: string[];
  exonyms?: string[];
}
