import { Event }
from "../../types/event";

export interface EventRepository {

  findAll():
    Promise<Event[]>;

  findBySlug(
    slug: string
  ):
    Promise<Event | null>;

  create(
    event: Event
  ):
    Promise<void>;

  update(
    event: Event
  ):
    Promise<void>;
}
