import { RelationshipRepository } from "../../core/repositories/RelationshipRepository";
import { RelationshipDefinition } from "../../types/ontology/RelationshipDefinition";
import { RelationshipStrength, RelationshipType } from "../../types/relationship";

export class RelationshipValidationEngine {
  constructor(private relRepo: RelationshipRepository) {}

  async validateCardinality(
    sourceId: string,
    relationshipDefinition: RelationshipDefinition
  ): Promise<void> {
    const existingRelationships = await this.relRepo.getByEntityAndType(
      sourceId,
      relationshipDefinition.type
    );

    switch (relationshipDefinition.cardinality) {
      case 'one-to-one':
        if (existingRelationships.length > 0) {
          throw new Error(`Cardinality violation: '${relationshipDefinition.type}' must be one-to-one.`);
        }
        break;
      case 'one-to-many':
        // No restriction on count
        break;
      case 'many-to-one':
        // This is tricky, usually checked on target side.
        break;
      case 'many-to-many':
        // No restriction
        break;
    }
  }

  async handleInverseRelationship(
    sourceId: string,
    targetId: string,
    relationshipDefinition: RelationshipDefinition
  ): Promise<void> {
    if (!relationshipDefinition.inverseType) {
      return;
    }

    // Check if inverse already exists to prevent recursion/duplicates
    const existingInverse = await this.relRepo.getByEntityAndType(
      targetId,
      relationshipDefinition.inverseType
    );
    
    if (existingInverse.some(rel => rel.targetId === sourceId)) {
      return; // Already exists
    }

    await this.relRepo.create(targetId, {
      type: relationshipDefinition.inverseType as RelationshipType,
      targetId: sourceId,
      strength: RelationshipStrength.MODERATE
    });
  }
}
