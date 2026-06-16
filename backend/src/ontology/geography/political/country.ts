import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import {
  OntologyDomain,
  MetadataValueType
} from "../../../modules/ontology/OntologyTypes";

export const countryOntology: OntologyDefinition = {
  entityType: "country",

  parentType: "place",

  label: "Country",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [

    {
      key: "iso2",
      label: "ISO2",
      type: MetadataValueType.STRING,
      required: true
    },

    {
      key: "iso3",
      label: "ISO3",
      type: MetadataValueType.STRING,
      required: true
    }

  ],

  relationships: [

    {
      type: "located_in",
      targetTypes: [
        "continent",
        "sub_region"
      ]
    },

    {
      type: "has_capital",
      targetTypes: [
        "capital_city"
      ]
    }

  ],

  sections: [
    {
      key: "government",
      title: "Government",
      order: 5
    },
    {
      key: "demographics",
      title: "Demographics",
      order: 6
    }
  ]
};
