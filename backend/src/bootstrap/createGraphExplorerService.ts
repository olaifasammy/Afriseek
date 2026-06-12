import { GraphExplorerService }
from "../services/GraphExplorerService";

import { EntityService }
from "../services/EntityService";

import { createEntityRepository }
from "./createEntityRepository";

export function
createGraphExplorerService() {

  return new GraphExplorerService(

    new EntityService(
      createEntityRepository()
    )

  );
}
