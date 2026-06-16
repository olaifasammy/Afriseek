import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const metropolisOntology: OntologyDefinition = {
  entityType: "metropolis",

  parentType: "city",

  label: "Metropolis",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [],

  sections: []
};
