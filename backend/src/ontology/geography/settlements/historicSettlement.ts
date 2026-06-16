import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../../modules/ontology/OntologyTypes";

export const historicSettlementOntology: OntologyDefinition = {
  entityType: "historic_settlement",
  parentType: "settlement",
  label: "Historic Settlement",
  domain: OntologyDomain.GEOGRAPHY,
  metadata: [],
  relationships: [],
  sections: []
};
