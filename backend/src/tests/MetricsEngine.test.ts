import { MetricsCollectorService } from "../services/MetricsCollectorService";
import { AggregationEngineService } from "../services/AggregationEngineService";

describe("Metrics Engine", () => {
  let collector: MetricsCollectorService;
  let engine: AggregationEngineService;

  beforeEach(() => {
    collector = new MetricsCollectorService();
    engine = new AggregationEngineService(collector);
  });

  it("should record and aggregate metrics", async () => {
    await collector.recordMetric("test.count", 1);
    await collector.recordMetric("test.count", 2);
    
    const aggregated = await engine.aggregateHourly("test.count");
    expect(aggregated.value).toBe(3);
  });
});
