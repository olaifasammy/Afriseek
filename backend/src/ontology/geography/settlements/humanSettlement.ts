import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import {
  OntologyDomain
} from "../../../modules/ontology/OntologyTypes";

export const humanSettlementOntology: OntologyDefinition = {
  entityType: "human_settlement",

  parentType: "place",

  label: "Human Settlement",

  domain: OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [],

  sections: [
    {
      key: "history",
      title: "History",
      order: 2
    }
  ]
};
