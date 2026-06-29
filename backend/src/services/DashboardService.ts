import { getDependencies } from "../config/dependencies";
import { createAuditService } from "../bootstrap/createAuditService";
import { createSettingsRepository } from "../bootstrap/createSettingsRepository";
import { createOntologyDefinitionRepository } from "../bootstrap/createOntologyDefinitionRepository";
import { HealthService } from "./HealthService";
import { AlertEngineService } from "./AlertEngineService";
import { AuditService } from "./AuditService";
import { Alert } from "../types/alert";
import { jobQueue } from "../workers/QueueManager";
import { StorageService } from "./StorageService";

export class DashboardService {

  async getStats() {

    const {
      userRepository,
      entityRepository
    } = getDependencies();

    const audit =
      createAuditService();

    const settingsRepo =
      createSettingsRepository();

    const ontologyRepo =
      createOntologyDefinitionRepository();

    const healthService = new HealthService();
    const alertService = new AlertEngineService(audit as AuditService);
    const storageService = new StorageService();

    const jobCounts = await jobQueue.getJobCounts();

    const users =
      await userRepository.findAll();

    const entities =
      await entityRepository.findAll();

    const audits =
      await audit.getAll();

    const aiLogs = audits.filter(a => a.entityType === 'AI');
    const notifications = await (getDependencies().notificationService as any).getNotifications();
    
    const articles = await getDependencies().articleService.getAll();
    const pendingArticles = articles.filter((a: any) => a.status === 'REVIEW');
    
    const ontologies =
      await ontologyRepo.getAll();
    const pendingOntologies = ontologies.filter((o: any) => o.status === 'PENDING' || o.active === false);

    const settings =
      await settingsRepo.get();

    const health = await healthService.check();
    const alerts: Alert[] = await alertService.getAlerts();
    const storageUsage = await storageService.getStorageUsage();

    return {
      users: users.length,
      entities: entities.length,
      articles: articles.length,
      pendingApprovals: pendingArticles.length + pendingOntologies.length,
      events: 0,
      auditEvents: audits.length,
      aiActivity: aiLogs.length,
      notifications: notifications.length,
      ontologies: ontologies.length,
      scheduledJobs: jobCounts,
      storageUsage,
      health,
      alerts,
      settings: {
        aiEnabled:
          settings.aiEnabled,
        indexingEnabled:
          settings.indexingEnabled
      }
    };
  }
}
