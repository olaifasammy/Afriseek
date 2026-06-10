import { AfriseekEntity }
from "../types/entity";

import { entities }
from "../data/entities";

import { InMemoryKnowledgeGraph }
from "../core/graph/implementations/InMemoryKnowledgeGraph";

export function
createKnowledgeGraph() {

  const map =
    new Map<
      string,
      AfriseekEntity
    >();

  for (
    const entity
    of entities
  ) {

    map.set(
      entity.id,
      entity
    );
  }

  return new InMemoryKnowledgeGraph(
    map
  );
}
