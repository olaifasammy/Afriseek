import { Event }
from "../types/event";

import { EventRepository }
from "./EventRepository";

export class InMemoryEventRepository
implements EventRepository {

  private events:
    Event[] = [];

  async findAll() {

    return this.events;
  }

  async findBySlug(
    slug: string
  ) {

    return (
      this.events.find(
        e => e.slug === slug
      ) || null
    );
  }

  async create(
    event: Event
  ) {

    this.events.push(
      event
    );
  }

  async update(
    event: Event
  ) {

    const index =
      this.events.findIndex(
        e => e.id === event.id
      );

    if (index >= 0) {

      this.events[index] =
        event;
    }
  }
}
