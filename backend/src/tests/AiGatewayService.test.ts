import { AiGatewayService } from "../services/AiGatewayService";
import { AiTaskStatus } from "../types/ai";

class MockNarrativeEngine {
  async generate(_payload: any): Promise<string> { return "Generated narrative"; }
}

class MockDiscoveryEngine {
  async discover(_payload: any): Promise<string> { return "Discovered content"; }
}

describe("AiGatewayService", () => {
  let aiGateway: AiGatewayService;

  beforeEach(() => {
    aiGateway = new AiGatewayService(
      new MockNarrativeEngine() as any, 
      new MockDiscoveryEngine() as any,
      { log: async () => {} } as any
    );
  });

  it("should route NARRATIVE task", async () => {
    const result = await aiGateway.executeTask({
      id: "task1",
      type: "NARRATIVE",
      payload: { root: {}, related: [] },
      actorId: "user1"
    });

    expect(result.status).toBe(AiTaskStatus.COMPLETED);
    expect(result.result).toBe("Generated narrative");
  });

  it("should route DISCOVERY task", async () => {
    const result = await aiGateway.executeTask({
      id: "task2",
      type: "DISCOVERY",
      payload: { entity: {}, candidates: [] },
      actorId: "user1"
    });

    expect(result.status).toBe(AiTaskStatus.COMPLETED);
    expect(result.result).toBe("Discovered content");
  });
});
