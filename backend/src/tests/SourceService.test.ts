import { SourceService } from "../services/SourceService";
import { SourceStatus, SourceType } from "../types/source";
import { SourceRepository } from "../core/repositories/SourceRepository";
import { AuditService } from "../services/AuditService";

class MockSourceRepository implements SourceRepository {
  private sources: any[] = [];
  async findAll() { return this.sources; }
  async findById(id: string) { return this.sources.find(s => s.id === id) || null; }
  async create(source: any) { this.sources.push(source); }
  async update(source: any) { 
    const index = this.sources.findIndex(s => s.id === source.id);
    this.sources[index] = source;
  }
  async delete(id: string, _actorId: string) { this.sources = this.sources.filter(s => s.id !== id); }
  async findByStatus(status: SourceStatus) { return this.sources.filter(s => s.status === status); }
}

class MockAuditService extends AuditService {
  public logs: any[] = [];
  constructor() { super({} as any); }
  async log(log: any) { this.logs.push(log); }
}

describe("SourceService", () => {
  let sourceService: SourceService;
  let mockRepo: MockSourceRepository;
  let mockAudit: MockAuditService;

  beforeEach(() => {
    mockRepo = new MockSourceRepository();
    mockAudit = new MockAuditService();
    sourceService = new SourceService(mockRepo, mockAudit);
  });

  it("should create a source with DRAFT status and audit log", async () => {
    const source = await sourceService.create("user1", {
      type: SourceType.BOOK,
      metadata: { title: "Test Book", author: "Author", publisher: "Publisher", publicationDate: "2026", language: "en" }
    });

    expect(source.status).toBe(SourceStatus.DRAFT);
    expect(mockAudit.logs.length).toBe(1);
    expect(mockAudit.logs[0].action).toBe("CREATE");
  });

  it("should verify source and boost credibility", async () => {
    const source = await sourceService.create("user1", {
      type: SourceType.BOOK,
      metadata: { title: "Test Book", author: "Author", publisher: "Publisher", publicationDate: "2026", language: "en" }
    });

    await sourceService.verify("user1", source.id);
    
    const fetched = await mockRepo.findById(source.id);
    expect(fetched?.status).toBe(SourceStatus.VERIFIED);
    expect(fetched?.credibilityScore).toBe(80);
    expect(mockAudit.logs.some(l => l.action === "VERIFY")).toBe(true);
  });
});
