import { MediaRepository } from "../core/repositories/MediaRepository";
import { Media, MediaStatus } from "../types/media";
import { AuditService } from "./AuditService";
import { logger } from "../config/logger";

export class MediaService {
  constructor(
    private mediaRepository: MediaRepository,
    private auditService: AuditService
  ) {}

  async upload(actorId: string, data: Omit<Media, 'id' | 'status' | 'createdAt' | 'updatedAt'>) {
    logger.info({ actorId, fileName: data.fileName }, "Uploading media");
    // Basic validation
    if (!data.metadata.title || !data.metadata.license) {
      logger.warn({ actorId, fileName: data.fileName }, "Media upload validation failed: missing title or license");
      throw new Error("Title and License are required.");
    }

    const media: Media = {
      id: `med_${Date.now()}`,
      type: data.type,
      fileName: data.fileName,
      mimeType: data.mimeType,
      fileSize: data.fileSize,
      status: MediaStatus.DRAFT,
      metadata: data.metadata,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    await this.mediaRepository.create(media);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'MEDIA',
      entityId: media.id,
      action: 'UPLOAD',
      timestamp: new Date().toISOString(),
      metadata: { new_value: media }
    });
    logger.info({ mediaId: media.id }, "Media uploaded successfully");
    return media;
  }

  async update(actorId: string, id: string, data: Partial<Media>) {
    logger.info({ actorId, mediaId: id }, "Updating media");
    const media = await this.mediaRepository.findById(id);
    if (!media) {
        logger.error({ mediaId: id }, "Media not found for update");
        throw new Error("Media not found");
    }

    const oldMedia = { ...media };
    Object.assign(media, data, { updatedAt: new Date().toISOString() });
    
    await this.mediaRepository.update(media);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'MEDIA',
      entityId: media.id,
      action: 'UPDATE',
      timestamp: new Date().toISOString(),
      metadata: { old_value: oldMedia, new_value: media }
    });
    logger.info({ mediaId: id }, "Media updated successfully");
    return media;
  }

  async delete(actorId: string, id: string) {
    logger.info({ actorId, mediaId: id }, "Deleting media");
    await this.mediaRepository.delete(id, actorId);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'MEDIA',
      entityId: id,
      action: 'DELETE',
      timestamp: new Date().toISOString()
    });
    logger.info({ mediaId: id }, "Media deleted successfully");
    return { success: true };
  }

  async verify(actorId: string, id: string) {
    logger.info({ actorId, mediaId: id }, "Verifying media");
    const media = await this.mediaRepository.findById(id);
    if (!media) {
        logger.error({ mediaId: id }, "Media not found for verification");
        throw new Error("Media not found");
    }

    const oldStatus = media.status;
    media.status = MediaStatus.VERIFIED;
    media.updatedAt = new Date().toISOString();
    
    await this.mediaRepository.update(media);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'MEDIA',
      entityId: media.id,
      action: 'VERIFY',
      timestamp: new Date().toISOString(),
      metadata: { old_value: { status: oldStatus }, new_value: { status: MediaStatus.VERIFIED } }
    });
    logger.info({ mediaId: id }, "Media verified successfully");
    return media;
  }

  async process(actorId: string, id: string, options: { resize?: boolean, compress?: boolean }) {
    logger.info({ actorId, mediaId: id, options }, "Processing media");
    const media = await this.mediaRepository.findById(id);
    if (!media) {
        throw new Error("Media not found");
    }

    // Simulate processing
    logger.info({ mediaId: id }, "Simulating media processing (compression/resize)");
    media.updatedAt = new Date().toISOString();
    
    await this.mediaRepository.update(media);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'MEDIA',
      entityId: media.id,
      action: 'PROCESS',
      timestamp: new Date().toISOString(),
      metadata: { options }
    });
    return media;
  }
}
