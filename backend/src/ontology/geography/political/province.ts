import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const provinceOntology: OntologyDefinition = {
  entityType: "province",

  parentType: "place",

  label: "Province",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [
    {
      type: "located_in",
      targetTypes: [
        "country"
      ],
      required: true
    }
  ],

  sections: []
};
