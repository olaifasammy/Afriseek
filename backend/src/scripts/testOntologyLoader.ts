import { loadOntologyDefinitions }
from "../ontology/registry/loadOntologyDefinitions";

const definitions =
  loadOntologyDefinitions();

console.log(
  "ONTOLOGIES=",
  definitions.length
);

console.log(
  definitions
    .slice(0, 10)
    .map(
      item => item.entityType
    )
);
