import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const monarchyOntology: OntologyDefinition = {
  entityType: "monarchy",

  parentType: "governing_system",

  label: "Monarchy",

  domain: OntologyDomain.GOVERNANCE,

  metadata: [],

  relationships: [
    {
      type: "ruled_by",
      targetTypes: [
        "king",
        "queen",
        "emperor",
        "pharaoh"
      ]
    }
  ],

  sections: []
};
