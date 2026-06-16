import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const villageOntology: OntologyDefinition = {
  entityType: "village",

  parentType: "settlement",

  label: "Village",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [],

  sections: []
};
