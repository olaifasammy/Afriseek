import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const protectedAreaOntology: OntologyDefinition = {
  entityType: "protected_area",
  parentType: "place",
  label: "Protected Area",
  domain: OntologyDomain.GEOGRAPHY,
  metadata: [],
  relationships: [],
  sections: []
};
