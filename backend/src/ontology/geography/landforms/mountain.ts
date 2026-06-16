import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const mountainOntology: OntologyDefinition = {
  entityType: "mountain",
  parentType: "landform",
  label: "Mountain",
  domain: OntologyDomain.GEOGRAPHY,
  metadata: [],
  relationships: [],
  sections: []
};
