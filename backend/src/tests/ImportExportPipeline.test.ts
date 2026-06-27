import { ImportExportPipeline } from "../services/ImportExportPipeline";
import { PipelineValidator } from "../validation/PipelineValidator";
import { AuditService } from "../services/AuditService";

class MockAuditService extends AuditService {
  public logs: any[] = [];
  constructor() { super({} as any); }
  async log(log: any) { this.logs.push(log); }
}

describe("ImportExportPipeline", () => {
  let pipeline: ImportExportPipeline;
  let mockAudit: MockAuditService;

  beforeEach(() => {
    mockAudit = new MockAuditService();
    pipeline = new ImportExportPipeline(new PipelineValidator(), mockAudit);
  });

  it("should process valid import", async () => {
    await pipeline.processImport({ id: "1", type: "entity" }, 'JSON');
    expect(mockAudit.logs.length).toBe(1);
    expect(mockAudit.logs[0].action).toBe("IMPORT_COMPLETED");
  });

  it("should fail on invalid import", async () => {
    await expect(pipeline.processImport({}, 'JSON')).rejects.toThrow();
    expect(mockAudit.logs.length).toBe(0);
  });
});
