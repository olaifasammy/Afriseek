import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const municipalityOntology: OntologyDefinition = {
  entityType: "municipality",

  parentType: "place",

  label: "Municipality",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [
    {
      type: "located_in",
      targetTypes: [
        "district",
        "province"
      ]
    }
  ],

  sections: []
};
