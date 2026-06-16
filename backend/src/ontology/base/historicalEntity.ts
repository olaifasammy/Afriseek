import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const historicalEntityOntology: OntologyDefinition = {

  entityType: "historical_entity",

  label: "Historical Entity",

  domain: OntologyDomain.HISTORY,

  metadata: [],

  relationships: [],

  sections: [
    {
      key: "overview",
      title: "Overview",
      order: 1
    },
    {
      key: "timeline",
      title: "Timeline",
      order: 2
    }
  ]
};
