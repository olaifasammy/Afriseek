import { EntityDefinitions }
from "./EntityDefinitions";

import { RelationshipDefinitions }
from "./RelationshipDefinitions";

import { TraitDefinitions }
from "./TraitDefinitions";

export class OntologyRegistry {

  getEntities() {
    return EntityDefinitions;
  }

  getRelationships() {
    return RelationshipDefinitions;
  }

  getTraits() {
    return TraitDefinitions;
  }
}
