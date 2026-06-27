export interface MetricPoint {
  id: string;
  name: string;
  value: number;
  tags: Record<string, string>;
  timestamp: string;
}

export interface AggregatedMetric {
  name: string;
  value: number;
  tags: Record<string, string>;
  interval: 'HOURLY' | 'DAILY' | 'MONTHLY';
  timestamp: string;
}
