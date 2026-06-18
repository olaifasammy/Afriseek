import { AuditService }
from "../services/AuditService";

import { AuditStoreRepository }
from "../repositories/AuditStoreRepository";

const repository =
  new AuditStoreRepository();

const service =
  new AuditService(
    repository
  );

export function createAuditService() {

  return service;
}
