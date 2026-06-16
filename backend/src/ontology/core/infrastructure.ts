import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const infrastructureOntology: OntologyDefinition = {
  entityType: "infrastructure",
  label: "Infrastructure",
  domain: OntologyDomain.INFRASTRUCTURE,
  metadata: [],
  relationships: [],
  sections: []
};
