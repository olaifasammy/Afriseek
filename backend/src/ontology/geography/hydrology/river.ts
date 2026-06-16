import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import {
  OntologyDomain,
  MetadataValueType
} from "../../../modules/ontology/OntologyTypes";

export const riverOntology:
OntologyDefinition = {

  entityType: "river",

  parentType: "geographic_feature",

  label: "River",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [

    {
      key: "length_km",
      label: "Length",
      type: MetadataValueType.NUMBER,
      required: false
    }

  ],

  relationships: [

    {
      type: "flows_through",
      targetTypes: [
        "country",
        "city"
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
      key: "hydrology",
      title: "Hydrology",
      order: 2
    }

  ]
};
