import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import {
  OntologyDomain,
  MetadataValueType
} from "../../modules/ontology/OntologyTypes";

export function createSettlementOntology(
  entityType: string,
  label: string
): OntologyDefinition {

  return {
    entityType,

    label,

    parentType: "settlement",

    domain: OntologyDomain.GEOGRAPHY,

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
        required: true
      },

      {
        key: "elevation",
        label: "Elevation",
        type: MetadataValueType.NUMBER,
        required: false
      }
    ],

    relationships: [
      {
        type: "located_in",
        targetTypes: [
          "country",
          "province",
          "district",
          "region"
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
      },
      {
        key: "demographics",
        title: "Demographics",
        order: 4
      }
    ]
  };
}
