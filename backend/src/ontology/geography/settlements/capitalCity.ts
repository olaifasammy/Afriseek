import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const capitalCityOntology: OntologyDefinition = {
  entityType: "capital_city",

  parentType: "city",

  label: "Capital City",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [
    {
      type: "capital_of",
      targetTypes: [
        "country",
        "kingdom",
        "empire"
      ],
      required: true
    }
  ],

  sections: []
};
