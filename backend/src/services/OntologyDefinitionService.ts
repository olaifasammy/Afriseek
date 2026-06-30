import { OntologyDefinitionRepository } from "../repositories/ontology/OntologyDefinitionRepository";
import { OntologyDefinitionRecord } from "../types/studio/OntologyDefinitionRecord";
import { ontologyEventEmitter } from "../infrastructure/events/OntologyEventEmitter";

export class OntologyDefinitionService {

  constructor(
    private repository:
      OntologyDefinitionRepository
  ) {}

  async getAll() {
    return this.repository.getAll();
  }

  async getByEntityType(
    entityType: string
  ) {
    return this.repository.getByEntityType(
      entityType
    );
  }

  async create(
    record: OntologyDefinitionRecord
  ) {
    await this.repository.create(
      record
    );
    ontologyEventEmitter.emitCreated(record);
  }

  async update(
    record: OntologyDefinitionRecord
  ) {
    await this.repository.update(
      record
    );
    ontologyEventEmitter.emitUpdated(record);
  }

  async delete(
    id: string
  ) {
    await this.repository.delete(id);
  }
}
