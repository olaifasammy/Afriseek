import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import {
  OntologyDomain,
  MetadataValueType
} from "../../../modules/ontology/OntologyTypes";

export const placeOntology: OntologyDefinition = {
  entityType: "place",

  label: "Place",

  domain: OntologyDomain.GEOGRAPHY,

  description:
    "Universal geographic root entity.",

  metadata: [

    {
      key: "name",
      label: "Name",
      type: MetadataValueType.STRING,
      required: true,
      searchable: true
    },

    {
      key: "coordinates",
      label: "Coordinates",
      type: MetadataValueType.COORDINATES,
      required: false
    }

  ],

  relationships: [

    {
      type: "located_in",
      targetTypes: [
        "place"
      ]
    },

    {
      type: "related_to",
      targetTypes: [
        "place"
      ]
    }

  ],

  sections: [

    {
      key: "overview",
      title: "Overview",
      order: 1
    }

  ]
};
