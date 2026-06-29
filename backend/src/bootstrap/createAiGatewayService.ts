import { AiGatewayService } from "../services/AiGatewayService";
import { NarrativeEngine } from "../core/intelligence/NarrativeEngine";
import { DiscoveryEngine } from "../core/intelligence/DiscoveryEngine";
import { AuditService } from "../services/AuditService";
import { AuditStoreRepository } from "../repositories/AuditStoreRepository";

export function createAiGatewayService(): AiGatewayService {
  return new AiGatewayService(
    new NarrativeEngine(),
    new DiscoveryEngine(),
    new AuditService(new AuditStoreRepository())
  );
}
