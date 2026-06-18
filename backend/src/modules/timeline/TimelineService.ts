import { EventRepository } from "../../repositories/EventRepository";
import { TimelineResponse } from "../../types/timeline";

export class TimelineService {
  constructor(
    private events: EventRepository
  ) {}

  async getTimeline(
    entityId: string
  ): Promise<TimelineResponse> {

    const events =
      await this.events.findAll();

    return {
      entityId,
      entries: events
        .filter(
          (event: any) =>
            event.entityId === entityId
        )
        .map(
          (event: any) => ({
            id: event.id,
            title: event.title,
            date: event.date,
            description: event.description
          })
        )
    };
  }
}
