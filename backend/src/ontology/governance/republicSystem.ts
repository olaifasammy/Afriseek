import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const republicSystemOntology: OntologyDefinition = {
  entityType: "republic_system",

  parentType: "governing_system",

  label: "Republic",

  domain: OntologyDomain.GOVERNANCE,

  metadata: [],

  relationships: [
    {
      type: "has_president",
      targetTypes: [
        "person"
      ]
    }
  ],

  sections: []
};
