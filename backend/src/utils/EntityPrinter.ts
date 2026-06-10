import { AfriseekEntity }
from "../types/entity";

export function printEntities(
  entities: AfriseekEntity[]
) {

  for (
    const entity
    of entities
  ) {

    console.log(
      `${entity.name} (${entity.entityType})`
    );
  }
}
