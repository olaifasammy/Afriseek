import { AuditService }
from "../services/AuditService";

import { InMemoryAuditRepository }
from "../repositories/InMemoryAuditRepository";

const repository =
  new InMemoryAuditRepository();

const service =
  new AuditService(
    repository
  );

export function createAuditService() {

  return service;
}
