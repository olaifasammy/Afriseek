import { SessionManagementService } from "../services/SessionManagementService";
import { SessionRepository } from "../core/repositories/SessionRepository";
import { AuditService } from "../services/AuditService";

class MockSessionRepository implements SessionRepository {
  private sessions: any[] = [];
  async findById(id: string) { return this.sessions.find(s => s.id === id) || null; }
  async findByUserId(userId: string) { return this.sessions.filter(s => s.userId === userId); }
  async create(session: any) { this.sessions.push(session); }
  async update(session: any) {
    const index = this.sessions.findIndex(s => s.id === session.id);
    this.sessions[index] = session;
  }
  async delete(id: string) { this.sessions = this.sessions.filter(s => s.id !== id); }
}

class MockAuditService extends AuditService {
  constructor() { super({} as any); }
  async log(_log: any) {}
}

describe("SessionManagementService", () => {
  let sessionService: SessionManagementService;
  let mockRepo: MockSessionRepository;
  let mockAudit: MockAuditService;

  beforeEach(() => {
    mockRepo = new MockSessionRepository();
    mockAudit = new MockAuditService();
    sessionService = new SessionManagementService(mockRepo, mockAudit);
  });

  it("should create a session", async () => {
    const session = await sessionService.createSession("user1", "dev1", "127.0.0.1");
    expect(session.id).toBeDefined();
    
    const savedSession = await mockRepo.findById(session.id);
    expect(savedSession).toBeDefined();
    expect(savedSession?.userId).toBe("user1");
  });

  it("should revoke a session", async () => {
    const session = await sessionService.createSession("user1", "dev1", "127.0.0.1");
    await sessionService.revokeSession("user1", session.id);
    
    const isValid = await sessionService.validateSession(session.id);
    expect(isValid).toBe(false);
  });
});
