import { MediaService } from "../services/MediaService";
import { MediaStatus } from "../types/media";
import { MediaRepository } from "../core/repositories/MediaRepository";
import { AuditService } from "../services/AuditService";

class MockMediaRepository implements MediaRepository {
  private mediaList: any[] = [];
  async findAll() { return this.mediaList; }
  async findById(id: string) { return this.mediaList.find(m => m.id === id) || null; }
  async create(media: any) { this.mediaList.push(media); }
  async update(media: any) { 
    const index = this.mediaList.findIndex(m => m.id === media.id);
    this.mediaList[index] = media;
  }
  async delete(id: string) { this.mediaList = this.mediaList.filter(m => m.id !== id); }
  async findByStatus(status: MediaStatus) { return this.mediaList.filter(m => m.status === status); }
}

class MockAuditService extends AuditService {
  public logs: any[] = [];
  constructor() { super({} as any); }
  async log(log: any) { this.logs.push(log); }
}

describe("MediaService", () => {
  let mediaService: MediaService;
  let mockRepo: MockMediaRepository;
  let mockAudit: MockAuditService;

  beforeEach(() => {
    mockRepo = new MockMediaRepository();
    mockAudit = new MockAuditService();
    mediaService = new MediaService(mockRepo, mockAudit);
  });

  it("should upload media with DRAFT status and audit log", async () => {
    const media = await mediaService.upload("user1", {
      type: "image",
      fileName: "test.jpg",
      mimeType: "image/jpeg",
      fileSize: 1024,
      metadata: { title: "Test", license: "CC BY" }
    });

    expect(media.status).toBe(MediaStatus.DRAFT);
    expect(mockAudit.logs.length).toBe(1);
    expect(mockAudit.logs[0].action).toBe("UPLOAD");
  });

  it("should verify media and audit log", async () => {
    const media = await mediaService.upload("user1", {
      type: "image",
      fileName: "test.jpg",
      mimeType: "image/jpeg",
      fileSize: 1024,
      metadata: { title: "Test", license: "CC BY" }
    });

    await mediaService.verify("user1", media.id);
    
    const fetched = await mockRepo.findById(media.id);
    expect(fetched?.status).toBe(MediaStatus.VERIFIED);
    expect(mockAudit.logs.some(l => l.action === "VERIFY")).toBe(true);
  });
});
