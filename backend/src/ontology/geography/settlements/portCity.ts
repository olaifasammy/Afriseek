import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const portCityOntology: OntologyDefinition = {
  entityType: "port_city",

  parentType: "city",

  label: "Port City",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [
    {
      type: "contains",
      targetTypes: [
        "seaport",
        "river_port"
      ]
    }
  ],

  sections: []
};
