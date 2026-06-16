import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import {
  OntologyDomain,
  MetadataValueType
} from "../../modules/ontology/OntologyTypes";

export const settlementOntology: OntologyDefinition = {
  entityType: "settlement",

  label: "Settlement",

  domain: OntologyDomain.GEOGRAPHY,

  description:
    "Generic human settlement ontology shared across Africa.",

  metadata: [
    {
      key: "population",
      label: "Population",
      type: MetadataValueType.NUMBER,
      required: false,
      searchable: true,
      filterable: true
    },

    {
      key: "coordinates",
      label: "Coordinates",
      type: MetadataValueType.COORDINATES,
      required: true,
      searchable: false
    }
  ],

  relationships: [
    {
      type: "located_in",
      targetTypes: [
        "country",
        "region",
        "province",
        "state"
      ],
      required: true
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
    },

    {
      key: "geography",
      title: "Geography",
      order: 3
    }
  ]
};
