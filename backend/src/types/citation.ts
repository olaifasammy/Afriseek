export enum CitationType {
  DIRECT_QUOTE = 'DIRECT_QUOTE',
  PARAPHRASE = 'PARAPHRASE',
  REFERENCE = 'REFERENCE',
  EVIDENCE = 'EVIDENCE',
  DATASET_CITATION = 'DATASET_CITATION'
}

export interface Citation {
  id: string;
  sourceId: string;
  entityId?: string;
  factId?: string;
  relationshipId?: string;
  articleId?: string;
  type: CitationType;
  pageNumber?: string;
  quote?: string;
  context?: string;
  confidenceScore: number;
  createdAt: string;
}
