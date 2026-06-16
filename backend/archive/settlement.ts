import { OntologyDefinition } from "../../../types/ontology/OntologyDefinition";
import {
  OntologyDomain
} from "../../../modules/ontology/OntologyTypes";

export const settlementOntology: OntologyDefinition = {
  entityType: "settlement",

  parentType:
    "human_settlement",

  label: "Settlement",

  domain:
    OntologyDomain.GEOGRAPHY,

  metadata: [],

  relationships: [],

  sections: []
};
