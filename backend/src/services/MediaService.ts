import { MediaRepository } from "../core/repositories/MediaRepository";
import { Media, MediaStatus } from "../types/media";
import { AuditService } from "./AuditService";

export class MediaService {
  constructor(
    private mediaRepository: MediaRepository,
    private auditService: AuditService
  ) {}

  async upload(actorId: string, data: Omit<Media, 'id' | 'status' | 'createdAt' | 'updatedAt'>) {
    // Basic validation
    if (!data.metadata.title || !data.metadata.license) {
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
    return media;
  }

  async update(actorId: string, id: string, data: Partial<Media>) {
    const media = await this.mediaRepository.findById(id);
    if (!media) throw new Error("Media not found");

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
    return media;
  }

  async delete(actorId: string, id: string) {
    await this.mediaRepository.delete(id, actorId);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'MEDIA',
      entityId: id,
      action: 'DELETE',
      timestamp: new Date().toISOString()
    });
    return { success: true };
  }

  async verify(actorId: string, id: string) {
    const media = await this.mediaRepository.findById(id);
    if (!media) throw new Error("Media not found");

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
    return media;
  }
}
