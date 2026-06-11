import { Request, Response } from "express";
import { GraphEngine } from "../core/graph/GraphEngine";
import { EntityService } from "../services/EntityService";
import { GraphResponse } from "../types/api/GraphResponse";

export class GraphController {

  constructor(
    private graphEngine: GraphEngine,
    private entityService: EntityService
  ) {}

  getGraph = async (
    req: Request,
    res: Response
  ) => {

    try {

      const slug =
        String(req.params.slug);

      const entity =
        await this.entityService.getBySlug(
          slug
        );

      if (!entity) {

        return res.status(404).json({
          success: false,
          message: "Entity not found"
        });
      }

      const related =
        await this.graphEngine.deepDive(
          entity.id,
          2
        );

      const response: GraphResponse = {

        entity: {
          id: entity.id,
          name: entity.name,
          type: entity.entityType
        },

        related: related.filter(item => item.entity.id !== entity.id).map(item => ({
          name: item.entity.name,
          type: item.entity.entityType,
          score: item.score,
          reasoning:
            item.explanation?.breakdown ?? []
        }))
      };

      return res.json({
        success: true,
        data: response
      });

    } catch {

      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };
}
