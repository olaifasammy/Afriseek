import crypto from "crypto";

import { getDependencies } from "../config/dependencies";
import { createAuditService } from "../bootstrap/createAuditService";

export class EntityMergeService {

  private audit =
    createAuditService();

  async merge(
    sourceEntityId: string,
    targetEntityId: string
  ) {

    const repository =
      getDependencies()
        .entityRepository;

    const source =
      await repository.findById(
        sourceEntityId
      );

    const target =
      await repository.findById(
        targetEntityId
      );

    if (!source || !target) {
      throw new Error(
        "Entity not found"
      );
    }

    target.relationships = [
      ...target.relationships,
      ...source.relationships
    ].filter(
      (relationship, index, array) =>
        index === array.findIndex(
          item =>
            item.type === relationship.type &&
            item.targetId === relationship.targetId
        )
    );

    target.facts = [
      ...target.facts,
      ...source.facts
    ];

    target.sources = [
      ...target.sources,
      ...source.sources
    ];

    target.traits = [
      ...target.traits,
      ...source.traits
    ];

    await repository.update(
      target
    );

    await repository.delete(
      sourceEntityId
    );

    await this.audit.log({
      id: crypto.randomUUID(),
      actorId: "system",
      action: "merge_entity",
      entityType: "entity",
      entityId: targetEntityId,
      timestamp:
        new Date().toISOString(),
      metadata: {
        sourceEntityId,
        targetEntityId
      }
    });

    return {
      sourceEntityId,
      targetEntityId
    };
  }
}
