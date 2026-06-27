import { VersionRepository, VersionRecord } from "../../../core/repositories/VersionRepository";

export class InMemoryVersionRepository implements VersionRepository {
  private versions: VersionRecord[] = [];

  async create(record: VersionRecord): Promise<void> {
    this.versions.push(record);
  }

  async findByEntityId(entityId: string): Promise<VersionRecord[]> {
    return this.versions.filter(v => v.entityId === entityId);
  }
}
