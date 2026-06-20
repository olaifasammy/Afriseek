import { createAuditService } from "../bootstrap/createAuditService";

export class EntityHistoryService {

  private audit =
    createAuditService();

  async getHistory(
    entityId: string
  ) {

    const logs =
      await this.audit.getAll();

    return logs
      .filter(
        log =>
          log.entityId === entityId
      )
      .sort(
        (a, b) =>
          b.timestamp.localeCompare(
            a.timestamp
          )
      );
  }
}
