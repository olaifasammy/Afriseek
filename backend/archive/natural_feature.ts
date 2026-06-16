import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const naturalFeatureOntology: OntologyDefinition = {
  entityType: "natural_feature",
  label: "Natural Feature",
  domain: OntologyDomain.GEOGRAPHY,
  metadata: [],
  relationships: [],
  sections: [
    {
      key: "overview",
      title: "Overview",
      order: 1
    },
    {
      key: "geography",
      title: "Geography",
      order: 2
    }
  ]
};
