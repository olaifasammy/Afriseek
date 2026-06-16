import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const regionOntology: OntologyDefinition = {
  entityType: "region",
  parentType: "place",
  label: "Region",
  domain: OntologyDomain.GEOGRAPHY,
  metadata: [],
  relationships: [],
  sections: []
};
