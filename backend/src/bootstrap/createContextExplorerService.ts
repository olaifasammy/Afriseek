import { ContextExplorerService } from "../services/ContextExplorerService";
import { createEntityService } from "./createEntityService";

export function createContextExplorerService() {
  return new ContextExplorerService(createEntityService());
}
