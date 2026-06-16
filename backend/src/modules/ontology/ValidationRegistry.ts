import { metadataValidator }
from "./MetadataValidator";

import { relationshipValidator }
from "./RelationshipValidator";

export class ValidationRegistry {

  validate(): void {

    metadataValidator.validate();

    relationshipValidator.validate();
  }
}

export const validationRegistry =
  new ValidationRegistry();
