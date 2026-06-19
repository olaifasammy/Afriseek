import { OntologyDefinitionRecord } from "../../types/studio/OntologyDefinitionRecord";

export interface OntologyDefinitionRepository {

  getAll():
    Promise<OntologyDefinitionRecord[]>;

  getByEntityType(
    entityType: string
  ):
    Promise<OntologyDefinitionRecord | null>;

  create(
    record: OntologyDefinitionRecord
  ):
    Promise<void>;

  update(
    record: OntologyDefinitionRecord
  ):
    Promise<void>;

  delete(
    id: string
  ):
    Promise<void>;
}
