import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const naturalFeatureOntology: OntologyDefinition = {
  entityType: "natural_feature",

  parentType: "place",

  label: "Natural Feature",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [
    {
      type: "located_in",
      targetTypes: [
        "country",
        "region",
        "province"
      ]
    }
  ],

  sections: [
    {
      key: "ecology",
      title: "Ecology",
      order: 10
    }
  ]
};
