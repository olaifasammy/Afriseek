import { getDependencies } from "../config/dependencies";
import { createAuditService } from "../bootstrap/createAuditService";
import { createSettingsRepository } from "../bootstrap/createSettingsRepository";
import { createOntologyDefinitionRepository } from "../bootstrap/createOntologyDefinitionRepository";
import { HealthService } from "./HealthService";
import { AlertEngineService } from "./AlertEngineService";
import { AuditService } from "./AuditService";
import { Alert } from "../types/alert";

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

    const users =
      await userRepository.findAll();

    const entities =
      await entityRepository.findAll();

    const audits =
      await audit.getAll();

    const settings =
      await settingsRepo.get();

    const ontologies =
      await ontologyRepo.getAll();

    const health = await healthService.check();
    const alerts: Alert[] = await alertService.getAlerts();

    return {
      users: users.length,
      entities: entities.length,
      articles: 0,
      events: 0,
      auditEvents: audits.length,
      ontologies: ontologies.length,
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
