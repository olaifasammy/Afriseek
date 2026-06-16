import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const universityOntology: OntologyDefinition = {

  entityType: "university",

  parentType: "institution",

  label: "University",

  domain: OntologyDomain.INSTITUTIONS,

  metadata: [],

  relationships: [],

  sections: []
};
