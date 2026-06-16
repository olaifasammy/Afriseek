import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";

export const entityOntology: OntologyDefinition = {
  entityType: "entity",

  label: "Entity",

  domain: "core",

  description:
    "Root ontology for every Afriseek entity.",

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
