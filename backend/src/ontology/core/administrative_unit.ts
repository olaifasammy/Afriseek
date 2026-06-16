import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const administrativeUnitOntology: OntologyDefinition = {
  entityType: "administrative_unit",
  label: "Administrative Unit",
  domain: OntologyDomain.GOVERNANCE,
  metadata: [],
  relationships: [],
  sections: [
    {
      key: "overview",
      title: "Overview",
      order: 1
    },
    {
      key: "governance",
      title: "Governance",
      order: 2
    }
  ]
};
