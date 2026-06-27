import { SourceRepository } from "../core/repositories/SourceRepository";
import { Source, SourceStatus } from "../types/source";
import { AuditService } from "./AuditService";
import { logger } from "../config/logger";

export class SourceService {
  constructor(
    private sourceRepository: SourceRepository,
    private auditService: AuditService
  ) {}

  async create(actorId: string, data: Omit<Source, 'id' | 'status' | 'credibilityScore' | 'createdAt' | 'updatedAt'>) {
    logger.info({ actorId, title: data.metadata.title }, "Creating source");
    const source: Source = {
      id: `src_${Date.now()}`,
      type: data.type,
      metadata: data.metadata,
      credibilityScore: 50, // Default base score
      status: SourceStatus.DRAFT,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await this.sourceRepository.create(source);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'SOURCE',
      entityId: source.id,
      action: 'CREATE',
      timestamp: new Date().toISOString(),
      metadata: { new_value: source }
    });
    logger.info({ sourceId: source.id }, "Source created successfully");
    return source;
  }

  async verify(actorId: string, id: string) {
    logger.info({ actorId, sourceId: id }, "Verifying source");
    const source = await this.sourceRepository.findById(id);
    if (!source) {
        logger.error({ sourceId: id }, "Source not found for verification");
        throw new Error("Source not found");
    }

    const oldStatus = source.status;
    source.status = SourceStatus.VERIFIED;
    source.credibilityScore = 80; // Boost score on verification
    source.updatedAt = new Date().toISOString();

    await this.sourceRepository.update(source);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'SOURCE',
      entityId: source.id,
      action: 'VERIFY',
      timestamp: new Date().toISOString(),
      metadata: { old_value: { status: oldStatus }, new_value: { status: SourceStatus.VERIFIED } }
    });
    logger.info({ sourceId: id }, "Source verified successfully");
    return source;
  }
}
