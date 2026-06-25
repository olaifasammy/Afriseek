import { AuditLog } from "../../../types/audit";

export class InMemoryAuditRepository {

  private logs: AuditLog[] = [];

  async create(
    log: AuditLog
  ) {

    this.logs.push(log);
  }

  async getAll(): Promise<AuditLog[]> {

    return this.logs;
  }
}
