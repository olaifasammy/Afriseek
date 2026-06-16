import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const socialGroupOntology: OntologyDefinition = {
  entityType: "social_group",
  label: "Social Group",
  domain: OntologyDomain.PEOPLE,
  metadata: [],
  relationships: [],
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
    }
  ]
};
