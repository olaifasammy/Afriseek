import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const chiefdomOntology: OntologyDefinition = {
  entityType: "chiefdom",

  parentType: "governing_system",

  label: "Chiefdom",

  domain: OntologyDomain.GOVERNANCE,

  metadata: [],

  relationships: [
    {
      type: "ruled_by",
      targetTypes: [
        "chief",
        "paramount_chief"
      ]
    }
  ],

  sections: []
};
