import { entitySchemas } from "./entitySchemas";
import { entityRelationships } from "./entityRelationships";
import { entitySections } from "./entitySections";

export const ontologyRegistry = {
  person: {
    metadata: entitySchemas.person,
    relationships: entityRelationships.person,
    sections: entitySections.person
  },

  ethnic_group: {
    metadata: entitySchemas.ethnic_group,
    relationships: entityRelationships.ethnic_group,
    sections: entitySections.ethnic_group
  },

  kingdom: {
    metadata: entitySchemas.kingdom,
    relationships: entityRelationships.kingdom,
    sections: entitySections.kingdom
  },

  city: {
    metadata: entitySchemas.city,
    relationships: entityRelationships.city,
    sections: entitySections.city
  },

  university: {
    metadata: entitySchemas.university,
    relationships: entityRelationships.university,
    sections: entitySections.university
  },

  language: {
    metadata: entitySchemas.language,
    relationships: entityRelationships.language,
    sections: entitySections.language
  }
};
