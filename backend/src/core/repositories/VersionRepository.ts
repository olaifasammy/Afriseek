export interface VersionRecord {
  id: string;
  entityId: string;
  version: number;
  data: any;
  createdAt: string;
}

export interface VersionRepository {
  create(record: VersionRecord): Promise<void>;
  findByEntityId(entityId: string): Promise<VersionRecord[]>;
}
