import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import {
  OntologyDomain,
  MetadataValueType
} from "../../modules/ontology/OntologyTypes";

export const cityOntology: OntologyDefinition = {

  entityType: "city",

  parentType: "settlement",

  label: "City",

  domain: OntologyDomain.GEOGRAPHY,

  description:
    "Human settlement with administrative, cultural, historical and geographic significance.",

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
        "state",
        "province",
        "country"
      ],
      required: true
    },

    {
      type: "contains",
      targetTypes: [
        "town",
        "village",
        "neighborhood"
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
    },

    {
      key: "geography",
      title: "Geography",
      order: 3
    },

    {
      key: "governance",
      title: "Governance",
      order: 4
    }

  ]
};
