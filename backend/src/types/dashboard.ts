export interface DashboardStats {
  users: number;
  entities: number;
  articles: number;
  events: number;
  auditEvents: number;
  settings: {
    aiEnabled: boolean;
    indexingEnabled: boolean;
  };
}
