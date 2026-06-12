import { ContextExplorerService }
from "../services/ContextExplorerService";

import { EntityService }
from "../services/EntityService";

import { createEntityRepository }
from "./createEntityRepository";

const service =
  new ContextExplorerService(

    new EntityService(
      createEntityRepository()
    )

  );

export function
createContextExplorerService() {

  return service;
}
