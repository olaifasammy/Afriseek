import { MetricsCollectorService } from "./MetricsCollectorService";
import { AggregatedMetric } from "../types/metrics";
import { logger } from "../config/logger";

export class AggregationEngineService {
  constructor(private metricsCollector: MetricsCollectorService) {}

  async aggregateHourly(metricName: string): Promise<AggregatedMetric> {
    const allMetrics = await this.metricsCollector.getAll();
    const relevantMetrics = allMetrics.filter(m => m.name === metricName);
    
    const sum = relevantMetrics.reduce((acc, curr) => acc + curr.value, 0);
    
    logger.info({ metricName, interval: 'HOURLY' }, "Aggregated metrics");
    return {
      name: metricName,
      value: sum,
      tags: {},
      interval: 'HOURLY',
      timestamp: new Date().toISOString()
    };
  }
}
