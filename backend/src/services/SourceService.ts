import { SourceRepository } from "../core/repositories/SourceRepository";
import { Source, SourceStatus } from "../types/source";
import { AuditService } from "./AuditService";
import { logger } from "../config/logger";

export class SourceService {
  constructor(
    private sourceRepository: SourceRepository,
    private auditService: AuditService
  ) {}

  async findAll(): Promise<Source[]> {
    return await this.sourceRepository.findAll();
  }

  async findById(id: string): Promise<Source | null> {
    return await this.sourceRepository.findById(id);
  }

  async create(actorId: string, data: Omit<Source, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'credibilityScore'>) {
    logger.info({ actorId, title: data.metadata.title }, "Creating source");
    const source: Source = {
      id: `src_${Date.now()}`,
      type: data.type,
      metadata: data.metadata,
      status: SourceStatus.DRAFT,
      credibilityScore: 0,
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
    return source;
  }

  async update(actorId: string, id: string, data: Partial<Source>) {
    logger.info({ actorId, sourceId: id }, "Updating source");
    const source = await this.sourceRepository.findById(id);
    if (!source) throw new Error("Source not found");

    const oldSource = { ...source };
    Object.assign(source, data, { updatedAt: new Date().toISOString() });
    
    await this.sourceRepository.update(source);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'SOURCE',
      entityId: source.id,
      action: 'UPDATE',
      timestamp: new Date().toISOString(),
      metadata: { old_value: oldSource, new_value: source }
    });
    return source;
  }

  async delete(actorId: string, id: string) {
    logger.info({ actorId, sourceId: id }, "Deleting source");
    await this.sourceRepository.delete(id, actorId);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'SOURCE',
      entityId: id,
      action: 'DELETE',
      timestamp: new Date().toISOString()
    });
    return { success: true };
  }
}
