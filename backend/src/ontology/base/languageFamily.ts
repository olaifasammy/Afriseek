import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";
import { OntologyDomain } from "../../modules/ontology/OntologyTypes";

export const languageFamilyOntology: OntologyDefinition = {

  entityType: "language_family",

  label: "Language Family",

  domain: OntologyDomain.LANGUAGE,

  metadata: [],

  relationships: [],

  sections: [
    {
      key: "classification",
      title: "Classification",
      order: 1
    }
  ]
};
