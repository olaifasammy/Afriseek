import { IntelligentContextService }
from "../services/IntelligentContextService";

import { EntityService }
from "../services/EntityService";

import { createEntityRepository }
from "./createEntityRepository";

const service =
  new IntelligentContextService(

    new EntityService(
      createEntityRepository()
    )

  );

export function
createIntelligentContextService() {

  return service;
}
