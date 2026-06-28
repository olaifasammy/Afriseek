import { DashboardService } from "../services/DashboardService";

jest.mock("../config/dependencies", () => ({
  getDependencies: () => ({
    userRepository: { findAll: () => Promise.resolve([]) },
    entityRepository: { findAll: () => Promise.resolve([]) }
  })
}));

jest.mock("../bootstrap/createAuditService", () => ({
  createAuditService: () => ({
    getAll: () => Promise.resolve([])
  })
}));

jest.mock("../bootstrap/createSettingsRepository", () => ({
  createSettingsRepository: () => ({
    get: () => Promise.resolve({ aiEnabled: true, indexingEnabled: true })
  })
}));

jest.mock("../bootstrap/createOntologyDefinitionRepository", () => ({
  createOntologyDefinitionRepository: () => ({
    getAll: () => Promise.resolve([])
  })
}));

// Mock HealthService and AlertEngineService
jest.mock("../services/HealthService", () => ({
  HealthService: jest.fn().mockImplementation(() => ({
    check: () => Promise.resolve({ status: "UP" })
  }))
}));

jest.mock("../services/AlertEngineService", () => ({
  AlertEngineService: jest.fn().mockImplementation(() => ({
    getAlerts: () => Promise.resolve([])
  }))
}));

describe("DashboardService", () => {
  it("should return stats including health and alerts", async () => {
    const dashboardService = new DashboardService();
    const stats = await dashboardService.getStats();
    
    expect(stats).toHaveProperty("users");
    expect(stats).toHaveProperty("entities");
    expect(stats).toHaveProperty("health");
    expect(stats).toHaveProperty("alerts");
    expect(stats.health).toHaveProperty("status", "UP");
    expect(stats.alerts).toEqual([]);
  });
});
