export interface TimelineEntry {
  id: string;
  title: string;
  date: string;
  description?: string;
}

export interface TimelineResponse {
  entityId: string;
  entries: TimelineEntry[];
}
