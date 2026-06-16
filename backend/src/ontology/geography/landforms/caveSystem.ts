import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const caveSystemOntology: OntologyDefinition = {
  entityType: "cave_system",
  parentType: "landform",
  label: "Cave System",
  domain: OntologyDomain.GEOGRAPHY,
  metadata: [],
  relationships: [],
  sections: []
};
