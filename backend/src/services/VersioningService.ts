import { VersionRepository } from "../core/repositories/VersionRepository";
import { randomUUID } from "crypto";

export class VersioningService {
  constructor(private versionRepository: VersionRepository) {}

  async createVersion(entityId: string, data: any, version: number): Promise<void> {
    await this.versionRepository.create({
      id: randomUUID(),
      entityId,
      version,
      data,
      createdAt: new Date().toISOString()
    });
  }
}
