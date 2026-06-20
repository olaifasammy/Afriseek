import crypto from "crypto";

import { getDependencies } from "../config/dependencies";
import { createAuditService } from "../bootstrap/createAuditService";

export class EntitySplitService {

  private audit =
    createAuditService();

  async split(
    sourceEntityId: string,
    newEntity: any,
    move: any
  ) {

    const repository =
      getDependencies()
        .entityRepository;

    const source =
      await repository.findById(
        sourceEntityId
      );

    if (!source) {
      throw new Error(
        "Source entity not found"
      );
    }

    const createdEntity = {
      ...source,
      ...newEntity,
      facts: [],
      traits: [],
      relationships: []
    };

    createdEntity.facts =
      (move.facts || [])
        .map(
          (index: number) =>
            source.facts[index]
        )
        .filter(Boolean);

    createdEntity.traits =
      (move.traits || [])
        .map(
          (index: number) =>
            source.traits[index]
        )
        .filter(Boolean);

    createdEntity.relationships =
      (move.relationships || [])
        .map(
          (index: number) =>
            source.relationships[index]
        )
        .filter(Boolean);

    source.facts =
      source.facts.filter(
        (_item, index) =>
          !(move.facts || [])
            .includes(index)
      );

    source.traits =
      source.traits.filter(
        (_item, index) =>
          !(move.traits || [])
            .includes(index)
      );

    source.relationships =
      source.relationships.filter(
        (_item, index) =>
          !(move.relationships || [])
            .includes(index)
      );

    await repository.create(
      createdEntity
    );

    await repository.update(
      source
    );

    await this.audit.log({
      id: crypto.randomUUID(),
      actorId: "system",
      action: "split_entity",
      entityType: "entity",
      entityId: sourceEntityId,
      timestamp:
        new Date().toISOString(),
      metadata: {
        sourceEntityId,
        newEntityId:
          createdEntity.id
      }
    });

    return {
      sourceEntityId,
      newEntityId:
        createdEntity.id
    };
  }
}
