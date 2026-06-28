import { IntelligentContextService } from "../services/IntelligentContextService";
import { createEntityService } from "./createEntityService";

export function createIntelligentContextService() {
  return new IntelligentContextService(createEntityService());
}
