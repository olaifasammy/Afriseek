import { AnalyticsService } from "../services/AnalyticsService";
import { createEventService } from "./createEventService";

export function createAnalyticsService(): AnalyticsService {
  return new AnalyticsService(createEventService());
}
