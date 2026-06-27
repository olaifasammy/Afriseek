import { ApiKeyService } from "../services/ApiKeyService";
import { ApiKeyRepository } from "../core/repositories/ApiKeyRepository";
import { AuditService } from "../services/AuditService";

class MockApiKeyRepository implements ApiKeyRepository {
  private keys: any[] = [];
  async findById(id: string) { return this.keys.find(k => k.id === id) || null; }
  async findByOwnerId(ownerId: string) { return this.keys.filter(k => k.ownerId === ownerId); }
  async create(key: any) { this.keys.push(key); }
  async update(key: any) { 
    const index = this.keys.findIndex(k => k.id === key.id);
    this.keys[index] = key;
  }
  async delete(id: string) { this.keys = this.keys.filter(k => k.id !== id); }
}

class MockAuditService extends AuditService {
  constructor() { super({} as any); }
  async log(_log: any) {}
}

describe("ApiKeyService", () => {
  let apiKeyService: ApiKeyService;
  let mockRepo: MockApiKeyRepository;
  let mockAudit: MockAuditService;

  beforeEach(() => {
    mockRepo = new MockApiKeyRepository();
    mockAudit = new MockAuditService();
    apiKeyService = new ApiKeyService(mockRepo, mockAudit);
  });

  it("should create an api key", async () => {
    const { id, key } = await apiKeyService.createKey("user1", "test-key", "owner1", ["read"]);
    expect(id).toBeDefined();
    expect(key).toBeDefined();
    
    const savedKey = await mockRepo.findById(id);
    expect(savedKey).toBeDefined();
    expect(savedKey?.name).toBe("test-key");
  });

  it("should revoke an api key", async () => {
    const { id } = await apiKeyService.createKey("user1", "test-key", "owner1", ["read"]);
    await apiKeyService.revokeKey("user1", id);
    
    const savedKey = await mockRepo.findById(id);
    expect(savedKey?.revokedAt).toBeDefined();
  });
});
