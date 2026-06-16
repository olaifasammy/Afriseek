import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const religiousSystemOntology: OntologyDefinition = {

  entityType: "religious_system",

  label: "Religious System",

  domain: OntologyDomain.RELIGION,

  metadata: [],

  relationships: [],

  sections: [
    {
      key: "beliefs",
      title: "Beliefs",
      order: 1
    },
    {
      key: "practices",
      title: "Practices",
      order: 2
    }
  ]
};
