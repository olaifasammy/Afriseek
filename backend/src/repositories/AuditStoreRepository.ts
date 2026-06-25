import { AuditRepository } from "../core/repositories/AuditRepository";
import { getDatabase } from "../config/supabase";
import { AuditLog } from "../types/audit";

export class AuditStoreRepository implements AuditRepository {

  async create(
    log: AuditLog
  ) {

    await (getDatabase()
      .from("audit_logs") as any)
      .insert({
        id: log.id,
        actor_id: log.actorId,
        action: log.action,
        entity_type: log.entityType,
        entity_id: log.entityId,
        timestamp: log.timestamp,
        metadata: log.metadata ?? {}
      });
  }

  async getAll(): Promise<AuditLog[]> {

    const { data } =
      await ((getDatabase()
        .from("audit_logs") as any)
        .select("*")
        .order("timestamp", {
          ascending: false
        }));

    return (data ?? []).map(
      (row: any) => ({
        id: row.id,
        actorId: row.actor_id,
        action: row.action,
        entityType: row.entity_type,
        entityId: row.entity_id,
        timestamp: row.timestamp,
        metadata: row.metadata ?? {}
      })
    );
  }
}
