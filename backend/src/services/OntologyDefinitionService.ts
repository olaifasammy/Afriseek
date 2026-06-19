import { OntologyDefinitionRepository } from "../repositories/ontology/OntologyDefinitionRepository";
import { OntologyDefinitionRecord } from "../types/studio/OntologyDefinitionRecord";

export class OntologyDefinitionService {

  constructor(
    private repository:
      OntologyDefinitionRepository
  ) {}

  async getAll():
    Promise<OntologyDefinitionRecord[]> {

    return this.repository.getAll();
  }

  async getByEntityType(
    entityType: string
  ):
    Promise<OntologyDefinitionRecord | null> {

    return this.repository.getByEntityType(
      entityType
    );
  }

  async create(
    record: OntologyDefinitionRecord
  ):
    Promise<void> {

    await this.repository.create(
      record
    );
  }

  async update(
    record: OntologyDefinitionRecord
  ):
    Promise<void> {

    await this.repository.update(
      record
    );
  }

  async delete(
    id: string
  ):
    Promise<void> {

    await this.repository.delete(
      id
    );
  }
}
