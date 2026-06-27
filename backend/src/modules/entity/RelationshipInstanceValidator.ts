import { Relationship } from "../../types/relationship";
import { EntityRepository } from "../../core/repositories/EntityRepository";
import { RelationshipRepository } from "../../core/repositories/RelationshipRepository";
import { ontologyRegistry } from "../ontology/OntologyRegistry";
import { RelationshipValidationEngine } from "./RelationshipValidationEngine";

export class RelationshipInstanceValidator {
  private engine: RelationshipValidationEngine;

  constructor(
    private entityRepo: EntityRepository,
    private relRepo: RelationshipRepository
  ) {
    this.engine = new RelationshipValidationEngine(relRepo);
  }

  async validate(sourceId: string, targetId: string, type: string): Promise<void> {
    const source = await this.entityRepo.findById(sourceId);
    const target = await this.entityRepo.findById(targetId);

    if (!source || !target) {
      throw new Error("Source or target entity not found");
    }

    const ontology = ontologyRegistry.get(source.entityType);
    if (!ontology) {
      throw new Error(`Ontology not found for entity type: ${source.entityType}`);
    }

    const relDefinition = ontology.relationships.find(r => r.type === type);
    if (!relDefinition) {
      throw new Error(`Relationship type '${type}' not allowed for '${source.entityType}'`);
    }

    // Validate target type
    if (relDefinition.targetTypes && !relDefinition.targetTypes.includes(target.entityType)) {
      throw new Error(`Relationship type '${type}' not allowed between '${source.entityType}' and '${target.entityType}'`);
    }

    // Use Engine for Cardinality & Inverse
    await this.engine.validateCardinality(sourceId, relDefinition);
    await this.engine.handleInverseRelationship(sourceId, targetId, relDefinition);
  }
}
