import { RelationshipTypeRepository } from "../repositories/ontology/RelationshipTypeRepository";
import { RelationshipTypeRecord } from "../types/studio/RelationshipTypeRecord";

export class RelationshipTypeService {

  constructor(
    private repository:
      RelationshipTypeRepository
  ) {}

  async getAll():
    Promise<RelationshipTypeRecord[]> {

    return this.repository.getAll();
  }

  async getByType(
    type: string
  ): Promise<
    RelationshipTypeRecord | null
  > {

    return this.repository.getByType(
      type
    );
  }

  async create(
    record: RelationshipTypeRecord
  ): Promise<void> {

    await this.repository.create(
      record
    );
  }

  async update(
    record: RelationshipTypeRecord
  ): Promise<void> {

    await this.repository.update(
      record
    );
  }

  async delete(
    id: string
  ): Promise<void> {

    await this.repository.delete(
      id
    );
  }
}
