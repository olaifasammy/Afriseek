import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const historicalEventOntology: OntologyDefinition = {

  entityType: "historical_event",

  parentType: "historical_entity",

  label: "Historical Event",

  domain: OntologyDomain.HISTORY,

  metadata: [],

  relationships: [],

  sections: []
};
