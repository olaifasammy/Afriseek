import { EntityHistoryService } from "../EntityHistoryService";
import { EntityVersioningService } from "../EntityVersioningService";

export class EntityAuditService {

  private history =
    new EntityHistoryService();

  private versions =
    new EntityVersioningService();

  async getAudit(
    entityId: string
  ) {

    const history =
      await this.history.getHistory(
        entityId
      );

    const versions =
      await this.versions.getVersions(
        entityId
      );

    return {
      entityId,
      history,
      versions
    };
  }
}
