import { AuditLog } from "../../types/audit";

export interface AuditRepository {

  create(
    log: AuditLog
  ): Promise<void>;

  getAll():
    Promise<AuditLog[]>;
}
