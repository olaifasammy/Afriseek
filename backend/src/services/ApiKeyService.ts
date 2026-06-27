import { ApiKeyRepository } from "../core/repositories/ApiKeyRepository";
import { ApiKey } from "../types/apiKey";
import { AuditService } from "./AuditService";
import { logger } from "../config/logger";
import crypto from "crypto";

export class ApiKeyService {
  constructor(
    private apiKeyRepository: ApiKeyRepository,
    private auditService: AuditService
  ) {}

  private hashKey(key: string): string {
    return crypto.createHash('sha256').update(key).digest('hex');
  }

  async createKey(actorId: string, name: string, ownerId: string, permissions: string[]): Promise<{ id: string; key: string }> {
    const rawKey = crypto.randomBytes(32).toString('hex');
    const apiKey: ApiKey = {
      id: `key_${Date.now()}`,
      name,
      keyHash: this.hashKey(rawKey),
      ownerId,
      permissions,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
      createdAt: new Date().toISOString()
    };

    await this.apiKeyRepository.create(apiKey);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'API_KEY',
      entityId: apiKey.id,
      action: 'CREATE',
      timestamp: new Date().toISOString()
    });
    logger.info({ apiKeyId: apiKey.id }, "API key created");
    return { id: apiKey.id, key: rawKey };
  }

  async revokeKey(actorId: string, id: string) {
    const apiKey = await this.apiKeyRepository.findById(id);
    if (!apiKey) throw new Error("Key not found");

    apiKey.revokedAt = new Date().toISOString();
    await this.apiKeyRepository.update(apiKey);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'API_KEY',
      entityId: apiKey.id,
      action: 'REVOKE',
      timestamp: new Date().toISOString()
    });
    logger.info({ apiKeyId: id }, "API key revoked");
  }
}
