import { createKnowledgeGraph }
from "../bootstrap/createKnowledgeGraph";

import { printEntities }
from "../utils/EntityPrinter";

async function run() {

  const graph =
    createKnowledgeGraph();

  console.log(
    "\n=== SEARCH ===\n"
  );

  printEntities(
    await graph.search(
      "yoruba"
    )
  );

  console.log(
    "\n=== OUTGOING ===\n"
  );

  printEntities(
    await graph.getNeighbors(
      "yoruba"
    )
  );

  console.log(
    "\n=== INCOMING ===\n"
  );

  printEntities(
    await graph.getIncomingNeighbors(
      "nigeria"
    )
  );

  console.log(
    "\n=== RELATED ===\n"
  );

  printEntities(
    await graph.getRelated(
      "nigeria",
      2
    )
  );
}

run();
