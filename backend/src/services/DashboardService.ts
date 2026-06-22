import { getDependencies } from "../config/dependencies";
import { createAuditService } from "../bootstrap/createAuditService";
import { createSettingsRepository } from "../bootstrap/createSettingsRepository";
import { createOntologyDefinitionRepository } from "../bootstrap/createOntologyDefinitionRepository";

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

    const users =
      await userRepository.findAll();

    const entities =
      await entityRepository.findAll();

    const audits =
      await audit.getAll();

    const settings =
      await settingsRepo.get();

    const ontologies =
      await ontologyRepo.findAll();

    return {
      users: users.length,
      entities: entities.length,
      articles: 0,
      events: 0,
      auditEvents: audits.length,
      ontologies: ontologies.length,
      settings: {
        aiEnabled:
          settings.aiEnabled,
        indexingEnabled:
          settings.indexingEnabled
      }
    };
  }
}
