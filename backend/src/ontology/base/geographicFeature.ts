import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import {
  OntologyDomain,
  MetadataValueType
} from "../../modules/ontology/OntologyTypes";

export const geographicFeatureOntology: OntologyDefinition = {

  entityType: "geographic_feature",

  label: "Geographic Feature",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [

    {
      key: "coordinates",
      label: "Coordinates",
      type: MetadataValueType.COORDINATES,
      required: true
    }

  ],

  relationships: [],

  sections: [

    {
      key: "overview",
      title: "Overview",
      order: 1
    }

  ]
};
