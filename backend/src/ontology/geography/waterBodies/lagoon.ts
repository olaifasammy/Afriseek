import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const lagoonOntology: OntologyDefinition = {
  entityType: "lagoon",
  parentType: "water_body",
  label: "lagoon",
  domain: OntologyDomain.GEOGRAPHY,
  metadata: [],
  relationships: [],
  sections: []
};
