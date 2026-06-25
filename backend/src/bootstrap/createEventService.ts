import { EventService }
from "../services/EventService";

import { InMemoryEventRepository }
from "../infrastructure/repositories/in-memory/InMemoryEventRepository";

const repository =
  new InMemoryEventRepository();

const service =
  new EventService(
    repository
  );

export function
createEventService() {

  return service;
}
