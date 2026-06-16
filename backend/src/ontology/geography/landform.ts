import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const landformOntology: OntologyDefinition = {
  entityType: "landform",
  parentType: "place",
  label: "Landform",
  domain: OntologyDomain.GEOGRAPHY,
  metadata: [],
  relationships: [],
  sections: []
};
