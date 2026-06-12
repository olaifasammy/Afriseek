import { RepositoryKnowledgeGraph } from "../core/graph/implementations/RepositoryKnowledgeGraph";
import { createEntityRepository } from "./createEntityRepository";
import { GeoContextEngine } from "../core/intelligence/GeoContextEngine";
import { CulturalGraphBiasEngine } from "../core/intelligence/CulturalGraphBiasEngine";

// FIX: Updated factory to correctly satisfy constructor injection parameters
export function createKnowledgeGraph() {
  return new RepositoryKnowledgeGraph(
    createEntityRepository(),
    new GeoContextEngine(),
    new CulturalGraphBiasEngine()
  );
}