import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const religionOntology: OntologyDefinition = {

  entityType: "religion",

  parentType: "religious_system",

  label: "Religion",

  domain: OntologyDomain.RELIGION,

  metadata: [],

  relationships: [],

  sections: []
};
