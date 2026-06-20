import { EntityHistoryService } from "./EntityHistoryService";

export class EntityVersioningService {

  private history =
    new EntityHistoryService();

  async getVersions(
    entityId: string
  ) {

    const events =
      await this.history.getHistory(
        entityId
      );

    return events.map(
      (event, index) => ({
        version:
          events.length - index,
        action:
          event.action,
        timestamp:
          event.timestamp,
        actorId:
          event.actorId
      })
    );
  }
}
