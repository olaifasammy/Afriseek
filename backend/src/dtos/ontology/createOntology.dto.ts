export interface CreateOntologyDto {
  entityType: string;
  label: string;
  domain: string;
  metadata?: any[];
  relationships?: any[];
  sections?: any[];
}
