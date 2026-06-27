import { Source, SourceStatus } from "../../types/source";

export interface SourceRepository {
  findAll(): Promise<Source[]>;
  findById(id: string): Promise<Source | null>;
  create(source: Source): Promise<void>;
  update(source: Source): Promise<void>;
  delete(id: string, actorId: string): Promise<void>;
  findByStatus(status: SourceStatus): Promise<Source[]>;
}
