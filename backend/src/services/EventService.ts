import { Event }
from "../types/event";

import { EventRepository }
from "../core/repositories/EventRepository";

export class EventService {

  constructor(
    private repository:
      EventRepository
  ) {}

  async getAll() {

    return this.repository.findAll();
  }

  async getBySlug(
    slug: string
  ) {

    return this.repository.findBySlug(
      slug
    );
  }

  async create(
    event: Event
  ) {

    await this.repository.create(
      event
    );
  }

  async update(
    event: Event
  ) {

    await this.repository.update(
      event
    );
  }
}
