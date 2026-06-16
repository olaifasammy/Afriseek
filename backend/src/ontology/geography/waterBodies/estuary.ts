import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const estuaryOntology: OntologyDefinition = {
  entityType: "estuary",
  parentType: "water_body",
  label: "estuary",
  domain: OntologyDomain.GEOGRAPHY,
  metadata: [],
  relationships: [],
  sections: []
};
