import { Source } from "../types/source";

export interface SourceRepository {

  findById(
    id: string
  ): Promise<Source | null>;

  findAll(): Promise<Source[]>;

  create(
    source: Source
  ): Promise<void>;

  update(
    source: Source
  ): Promise<void>;

  delete(
    id: string
  ): Promise<void>;
}
