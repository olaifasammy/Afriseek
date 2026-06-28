import { ArticleService } from "../services/ArticleService";
import { ArticleStatus } from "../types/article";
import { ArticleRepository } from "../core/repositories/ArticleRepository";
import { AuditService } from "../services/AuditService";

// Mocking dependencies
class MockArticleRepository implements ArticleRepository {
  private articles: any[] = [];
  async findAll() { return this.articles; }
  async findBySlug(slug: string) { return this.articles.find(a => a.slug === slug) || null; }
  async findById(id: string) { return this.articles.find(a => a.id === id) || null; }
  async create(article: any) { this.articles.push(article); }
  async update(article: any) { 
    const index = this.articles.findIndex(a => a.id === article.id);
    this.articles[index] = article;
  }
  async delete(id: string, _actorId: string) { this.articles = this.articles.filter(a => a.id !== id); }
  async findByStatus(status: ArticleStatus) { return this.articles.filter(a => a.status === status); }
  async findByEntityId(entityId: string) { return this.articles.filter(a => a.entityIds.includes(entityId)); }
}

class MockAuditService extends AuditService {
  public logs: any[] = [];
  constructor() { super({} as any); }
  async log(log: any) { this.logs.push(log); }
}

describe("ArticleService", () => {
  let articleService: ArticleService;
  let mockRepo: MockArticleRepository;
  let mockAudit: MockAuditService;

  beforeEach(() => {
    mockRepo = new MockArticleRepository();
    mockAudit = new MockAuditService();
    articleService = new ArticleService(mockRepo, mockAudit);
  });

  it("should create an article with DRAFT status and audit log", async () => {
    const article = await articleService.create("user1", {
      slug: "test-article",
      title: "Test Article",
      summary: "Summary",
      entityIds: []
    });

    expect(article.status).toBe(ArticleStatus.DRAFT);
    expect(mockAudit.logs.length).toBe(1);
    expect(mockAudit.logs[0].action).toBe("CREATE");
  });

  it("should create a version on update", async () => {
    const article = await articleService.create("user1", {
      slug: "test-article",
      title: "Test Article",
      summary: "Summary",
      entityIds: []
    });

    await articleService.update("user1", article.id, { summary: "Updated Summary" });
    
    const updated = await articleService.getBySlug("test-article");
    expect(updated?.versions.length).toBe(1);
    expect(updated?.summary).toBe("Updated Summary");
  });

  it("should transition status and audit log", async () => {
    const article = await articleService.create("user1", {
      slug: "test-article",
      title: "Test Article",
      summary: "Summary",
      entityIds: []
    });

    await articleService.transitionStatus("user1", article.id, ArticleStatus.PUBLISHED);
    
    const updated = await articleService.getBySlug("test-article");
    expect(updated?.status).toBe(ArticleStatus.PUBLISHED);
    expect(mockAudit.logs.some(l => l.action === "STATUS_CHANGE")).toBe(true);
  });
});
