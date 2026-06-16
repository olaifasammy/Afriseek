import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const traditionalInstitutionOntology: OntologyDefinition = {
  entityType: "traditional_institution",

  parentType: "governing_system",

  label: "Traditional Institution",

  domain: OntologyDomain.GOVERNANCE,

  metadata: [],

  relationships: [
    {
      type: "associated_with",
      targetTypes: [
        "ethnic_group",
        "kingdom",
        "clan"
      ]
    }
  ],

  sections: []
};
