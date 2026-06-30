export enum SourceType {
  BOOK = 'BOOK',
  JOURNAL = 'JOURNAL',
  RESEARCH_PAPER = 'RESEARCH_PAPER',
  WEBSITE = 'WEBSITE',
  GOVERNMENT_PUBLICATION = 'GOVERNMENT_PUBLICATION',
  ARCHIVE_RECORD = 'ARCHIVE_RECORD',
  NEWS_ARTICLE = 'NEWS_ARTICLE',
  DATASET = 'DATASET',
  INTERVIEW = 'INTERVIEW',
  MULTIMEDIA = 'MULTIMEDIA',
  ACADEMIC_THESIS = 'ACADEMIC_THESIS'
}

export enum SourceStatus {
  DRAFT = 'DRAFT',
  VERIFIED = 'VERIFIED',
  ARCHIVED = 'ARCHIVED'
}

export interface SourceMetadata {
  title: string;
  author: string;
  publisher: string;
  publicationDate: string;
  language: string;
  urlIdentifier?: string;
  isbn?: string;
  issn?: string;
  doi?: string;
  edition?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  archiveLocation?: string;
  notes?: string;
}

export interface Source {
  id: string;
  type: SourceType;
  metadata: SourceMetadata;
  credibilityScore: number;
  status: SourceStatus;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
