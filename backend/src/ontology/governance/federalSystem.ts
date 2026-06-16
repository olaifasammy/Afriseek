import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const federalSystemOntology: OntologyDefinition = {
  entityType: "federal_system",

  parentType: "governing_system",

  label: "Federal System",

  domain: OntologyDomain.GOVERNANCE,

  metadata: [],

  relationships: [
    {
      type: "contains",
      targetTypes: [
        "state",
        "province"
      ]
    }
  ],

  sections: []
};
