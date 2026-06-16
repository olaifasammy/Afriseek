import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import {
  OntologyDomain
} from "../../modules/ontology/OntologyTypes";

export const languageOntology:
OntologyDefinition = {

  entityType: "language",

  label: "Language",

  domain: OntologyDomain.LANGUAGE,

  metadata: [],

  relationships: [

    {
      type: "spoken_by",
      targetTypes: [
        "ethnic_group"
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
      key: "grammar",
      title: "Grammar",
      order: 2
    }

  ]
};
