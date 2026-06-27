export enum AlertSeverity {
  INFO = 'INFO',
  WARNING = 'WARNING',
  CRITICAL = 'CRITICAL'
}

export interface Alert {
  id: string;
  metricName: string;
  severity: AlertSeverity;
  message: string;
  timestamp: string;
}
