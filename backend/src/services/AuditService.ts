import { AuditLog } from "../types/audit";
import { AuditRepository } from "../core/repositories/AuditRepository";

export class AuditService {

  constructor(
    private repository:
      AuditRepository
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
