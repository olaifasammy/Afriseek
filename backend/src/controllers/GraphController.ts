import { Request, Response } from "express";
import { GraphEngine } from "../core/graph/GraphEngine";
import { EntityService } from "../services/EntityService";
import { NarrativeEngine } from "../core/intelligence/NarrativeEngine";
import { GraphResponse } from "../types/api/GraphResponse";

export class GraphController {
  // FIX: Injected NarrativeEngine to bridge intelligence with API output
  constructor(
    private graphEngine: GraphEngine,
    private entityService?: EntityService,
    private narrativeEngine?: NarrativeEngine
  ) {}
  
  setDependencies(entityService: EntityService, narrativeEngine: NarrativeEngine) {
    this.entityService = entityService;
    this.narrativeEngine = narrativeEngine;
  }

  getGraph = async (req: Request, res: Response) => {
    try {
      const slug = String(req.params.slug);
      const entity = await (this.entityService as EntityService).getBySlug(slug);

      if (!entity) return res.status(404).json({ success: false, message: "Entity not found" });

      const related = await this.graphEngine.deepDive(entity.id, 2);
      
      // Generate Narrative using the orphaned engine
      const mappedRelated = related.map(item => item.entity);
      const narrative = (this.narrativeEngine as NarrativeEngine).generate(entity, mappedRelated);

      const response: GraphResponse = {
        entity: { id: entity.id, name: entity.name, type: entity.entityType },
        narrative, // Connected and returning to client!
        related: related.filter(item => item.entity.id !== entity.id).map(item => ({
          name: item.entity.name,
          type: item.entity.entityType,
          score: item.score,
          reasoning: item.explanation?.breakdown ?? []
        }))
      };

      return res.json({ success: true, data: response });
    } catch (error) {
      console.error("[GraphController.getGraph] Error:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

  getPath = async (req: Request, res: Response) => {
    try {
      const from = String(req.query.from ?? "");
      const to = String(req.query.to ?? "");
      const start = await (this.entityService as EntityService).getBySlug(from);
      const end = await (this.entityService as EntityService).getBySlug(to);

      if (!start || !end) return res.status(404).json({ success: false, message: "Entity not found" });

      const path = await this.graphEngine.findPath(start.id, end.id);
      return res.json({ success: true, data: path });
    } catch (error) {
      console.error("[GraphController.getPath] Error:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

  getRecommendations = async (req: Request, res: Response) => {
    try {
      const slug = String(req.params.slug);
      const entity = await (this.entityService as EntityService).getBySlug(slug);

      if (!entity) return res.status(404).json({ success: false, message: "Entity not found" });

      const recommendations = await this.graphEngine.recommend(entity.id, 10);
      return res.json({ success: true, data: recommendations });
    } catch (error) {
      console.error("[GraphController.getRecommendations] Error:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
}