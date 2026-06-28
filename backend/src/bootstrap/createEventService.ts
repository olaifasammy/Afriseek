import { EventService } from "../services/EventService";
import { PostgreSQLEventRepository } from "../infrastructure/repositories/postgres/PostgreSQLEventRepository";

export function createEventService() {
  const repository = new PostgreSQLEventRepository();
  return new EventService(repository);
}
