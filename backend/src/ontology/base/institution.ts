import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const institutionOntology: OntologyDefinition = {

  entityType: "institution",

  label: "Institution",

  domain: OntologyDomain.INSTITUTIONS,

  metadata: [],

  relationships: [],

  sections: [
    {
      key: "overview",
      title: "Overview",
      order: 1
    }
  ]
};
