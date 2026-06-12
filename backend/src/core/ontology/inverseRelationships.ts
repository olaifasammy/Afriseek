import { RelationshipType } from "../../types/enums/RelationshipType";

export const inverseRelationships:
Partial<Record<RelationshipType, RelationshipType>> = {

  [RelationshipType.LOCATED_IN]:
    RelationshipType.CONTAINS,

  [RelationshipType.CONTAINS]:
    RelationshipType.LOCATED_IN,

  [RelationshipType.HAS_CAPITAL]:
    RelationshipType.CAPITAL_OF,

  [RelationshipType.CAPITAL_OF]:
    RelationshipType.HAS_CAPITAL,

  [RelationshipType.FOUNDED_BY]:
    RelationshipType.FOUNDED,

  [RelationshipType.FOUNDED]:
    RelationshipType.FOUNDED_BY,

  [RelationshipType.CREATED_BY]:
    RelationshipType.CREATED,

  [RelationshipType.CREATED]:
    RelationshipType.CREATED_BY,

  [RelationshipType.RULED_BY]:
    RelationshipType.RULED,

  [RelationshipType.RULED]:
    RelationshipType.RULED_BY,

  [RelationshipType.SPEAKS]:
    RelationshipType.SPOKEN_BY,

  [RelationshipType.SPOKEN_BY]:
    RelationshipType.SPEAKS,

  [RelationshipType.PRACTICES]:
    RelationshipType.PRACTICED_BY,

  [RelationshipType.PRACTICED_BY]:
    RelationshipType.PRACTICES,

  [RelationshipType.INFLUENCED]:
    RelationshipType.INFLUENCED_BY,

  [RelationshipType.INFLUENCED_BY]:
    RelationshipType.INFLUENCED
};
