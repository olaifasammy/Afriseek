export enum SourceType {
  BOOK = "book",
  JOURNAL = "journal",
  THESIS = "thesis",
  MANUSCRIPT = "manuscript",
  ARCHIVE = "archive",

  GOVERNMENT_RECORD = "government_record",
  CENSUS = "census",
  LEGAL_DOCUMENT = "legal_document",

  NEWSPAPER = "newspaper",
  MAGAZINE = "magazine",

  WEBSITE = "website",
  DATABASE = "database",

  INTERVIEW = "interview",
  ORAL_TRADITION = "oral_tradition",
  FIELD_RESEARCH = "field_research",

  MUSEUM = "museum",
  UNIVERSITY = "university",
  ORGANIZATION = "organization",

  MAP = "map",
  IMAGE = "image",
  AUDIO = "audio",
  VIDEO = "video",

  OTHER = "other",
  INSCRIPTION = "inscription",
  
  ORAL_HISTORY = "oral_history",
  ARTIFACT = "artifact",
  ARCHAEOLOGICAL_REPORT = "archaeological_report",
  MISSIONARY_RECORD = "missionary_record",
  COLONIAL_RECORD = "colonial_record",
  ROYAL_CHRONICLE = "royal_chronicle",
  GENEALOGY = "genealogy"
}

export enum SourceReliability {
  VERIFIED = "verified",
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
  UNVERIFIED = "unverified"
}

export interface SourceAuthor {
  name: string;
  role?: string;
}

export interface Source {
  id: string;

  type: SourceType;

  title: string;

  authors?: SourceAuthor[];

  publisher?: string;

  publicationDate?: string;

  url?: string;

  isbn?: string;

  issn?: string;

  language?: string;

  region?: string;

  archiveReference?: string;

  reliability: SourceReliability;

  notes?: string;

  accessedAt?: string;
}