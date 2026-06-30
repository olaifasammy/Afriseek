export interface CreateRelationshipDto {
  sourceEntityId: string;
  targetEntityId: string;
  relationshipType: string;
  confidenceScore: number;
  evidenceSources?: string[];
  notes?: string;
}
