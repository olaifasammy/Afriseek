import { Alert, AlertSeverity } from "../types/alert";
import { AuditService } from "./AuditService";
import { logger } from "../config/logger";

export class AlertEngineService {
  constructor(private auditService: AuditService) {}

  async getAlerts(): Promise<Alert[]> {
    const logs = await this.auditService.getAll();
    return logs
      .filter(log => log.entityType === 'ALERT' && log.metadata && log.metadata.alert)
      .map(log => log.metadata!.alert as Alert);
  }

  async checkThreshold(metricName: string, value: number, threshold: number, severity: AlertSeverity = AlertSeverity.WARNING) {
    if (value >= threshold) {
      const alert: Alert = {
        id: `alt_${Date.now()}`,
        metricName,
        severity,
        message: `Metric ${metricName} exceeded threshold: ${value} >= ${threshold}`,
        timestamp: new Date().toISOString()
      };
      await this.triggerAlert(alert);
    }
  }

  private async triggerAlert(alert: Alert) {
    logger.error({ alert }, "🚨 Alert triggered");
    await this.auditService.log({
        id: `audit_${Date.now()}`,
        actorId: 'SYSTEM',
        entityType: 'ALERT',
        entityId: alert.id,
        action: 'ALERT_TRIGGERED',
        timestamp: new Date().toISOString(),
        metadata: { alert }
    });
  }
}
