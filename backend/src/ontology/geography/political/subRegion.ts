import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const subRegionOntology: OntologyDefinition = {
  entityType: "sub_region",

  parentType: "place",

  label: "Sub Region",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [
    {
      type: "located_in",
      targetTypes: [
        "continent"
      ]
    }
  ],

  sections: []
};
