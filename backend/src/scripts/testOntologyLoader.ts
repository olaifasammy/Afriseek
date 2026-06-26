import { loadOntologyDefinitions }
from "../ontology/registry/loadOntologyDefinitions";
import { logger } from "../config/logger";

const definitions =
  loadOntologyDefinitions();

logger.info(
  { count: definitions.length },
  "ONTOLOGIES="
);

logger.info(
  definitions
    .slice(0, 10)
    .map(
      item => item.entityType
    ),
  "ONTOLOGY_TYPES="
);
