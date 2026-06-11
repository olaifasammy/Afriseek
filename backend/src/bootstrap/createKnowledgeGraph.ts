import { RepositoryKnowledgeGraph }
from "../core/graph/implementations/RepositoryKnowledgeGraph";

import { createEntityRepository }
from "./createEntityRepository";

export function
createKnowledgeGraph() {

  return new RepositoryKnowledgeGraph(
    createEntityRepository()
  );
}
