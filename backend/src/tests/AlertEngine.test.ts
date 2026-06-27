import { AlertEngineService } from "../services/AlertEngineService";
import { AuditService } from "../services/AuditService";
import { AlertSeverity } from "../types/alert";

class MockAuditService extends AuditService {
  public logs: any[] = [];
  constructor() { super({} as any); }
  async log(log: any) { this.logs.push(log); }
}

describe("AlertEngineService", () => {
  let alertEngine: AlertEngineService;
  let mockAudit: MockAuditService;

  beforeEach(() => {
    mockAudit = new MockAuditService();
    alertEngine = new AlertEngineService(mockAudit);
  });

  it("should trigger alert when threshold is exceeded", async () => {
    await alertEngine.checkThreshold("test.metric", 100, 50, AlertSeverity.CRITICAL);
    
    expect(mockAudit.logs.length).toBe(1);
    expect(mockAudit.logs[0].action).toBe("ALERT_TRIGGERED");
    expect(mockAudit.logs[0].metadata.alert.severity).toBe(AlertSeverity.CRITICAL);
  });

  it("should not trigger alert when threshold is not exceeded", async () => {
    await alertEngine.checkThreshold("test.metric", 40, 50);
    
    expect(mockAudit.logs.length).toBe(0);
  });
});
