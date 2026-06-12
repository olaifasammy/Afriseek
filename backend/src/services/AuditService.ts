import { AuditLog } from "../types/audit";
import { InMemoryAuditRepository }
from "../repositories/InMemoryAuditRepository";

export class AuditService {

  constructor(
    private repository:
      InMemoryAuditRepository
  ) {}

  async log(
    log: AuditLog
  ) {

    await this.repository.create(
      log
    );
  }

  async getAll() {

    return this.repository.getAll();
  }
}
