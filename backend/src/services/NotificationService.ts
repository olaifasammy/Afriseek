import { Notification, NotificationType } from "../types/notification";
import { AuditService } from "./AuditService";

export class NotificationService {
  constructor(private auditService: AuditService) {}

  async getNotifications(): Promise<Notification[]> {
    const logs = await this.auditService.getAll();
    return logs
      .filter(log => log.entityType === 'NOTIFICATION')
      .map(log => log.metadata!.notification as Notification);
  }

  async send(type: NotificationType, message: string) {
    const notification: Notification = {
      id: `notif_${Date.now()}`,
      type,
      message,
      timestamp: new Date().toISOString(),
      read: false
    };
    
    await this.auditService.log({
        id: `audit_${Date.now()}`,
        actorId: 'SYSTEM',
        entityType: 'NOTIFICATION',
        entityId: notification.id,
        action: 'NOTIFICATION_SENT',
        timestamp: new Date().toISOString(),
        metadata: { notification }
    });
  }
}
