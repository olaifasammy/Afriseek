import { Citation } from "../../types/citation";

export interface CitationRepository {
  findBySourceId(sourceId: string): Promise<Citation[]>;
  findByEntityId(entityId: string): Promise<Citation[]>;
  create(citation: Citation): Promise<void>;
  delete(id: string): Promise<void>;
}
