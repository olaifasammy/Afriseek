import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const governingSystemOntology: OntologyDefinition = {
  entityType: "governing_system",

  label: "Governing System",

  domain: OntologyDomain.GOVERNANCE,

  description:
    "Framework through which political authority is organized and exercised.",

  metadata: [],

  relationships: [

    {
      type: "governs",
      targetTypes: [
        "country",
        "kingdom",
        "empire",
        "city_state",
        "republic"
      ]
    }

  ],

  sections: [

    {
      key: "overview",
      title: "Overview",
      order: 1
    },

    {
      key: "structure",
      title: "Structure",
      order: 2
    }

  ]
};
