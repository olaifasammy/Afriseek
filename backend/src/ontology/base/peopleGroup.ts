import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const peopleGroupOntology: OntologyDefinition = {

  entityType: "people_group",

  label: "People Group",

  domain: OntologyDomain.PEOPLE,

  metadata: [],

  relationships: [

    {
      type: "located_in",
      targetTypes: [
        "country",
        "region"
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
      key: "history",
      title: "History",
      order: 2
    }

  ]
};
