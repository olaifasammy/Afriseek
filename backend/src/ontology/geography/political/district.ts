import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const districtOntology: OntologyDefinition = {
  entityType: "district",

  parentType: "place",

  label: "District",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [
    {
      type: "located_in",
      targetTypes: [
        "province",
        "state",
        "country"
      ]
    }
  ],

  sections: []
};
