import { Fact } from "../types/fact";

export interface FactRepository {

  findById(
    id: string
  ): Promise<Fact | null>;

  findByEntityId(
    entityId: string
  ): Promise<Fact[]>;

  create(
    fact: Fact
  ): Promise<void>;

  update(
    fact: Fact
  ): Promise<void>;

  delete(
    id: string
  ): Promise<void>;
}
