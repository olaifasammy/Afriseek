import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const townOntology: OntologyDefinition = {
  entityType: "town",

  parentType: "settlement",

  label: "Town",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [],

  sections: []
};
