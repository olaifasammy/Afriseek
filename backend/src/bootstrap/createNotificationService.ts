import { NotificationService } from "../services/NotificationService";
import { createAuditService } from "./createAuditService";

export function createNotificationService(): NotificationService {
  return new NotificationService(createAuditService());
}
