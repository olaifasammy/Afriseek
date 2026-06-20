import { Request, Response } from "express";
import { createGraphEngine } from "../bootstrap/createGraphEngine";

export class StudioGraphExplorerController {
  private graph = createGraphEngine();

  explorer = async (_req: Request, res: Response) => {
    const entities = await this.graph.search("");

    return res.json({
      success: true,
      data: entities
    });
  };

  nodeInspector = async (req: Request, res: Response) => {
    const entity = await this.graph.getEntity(String(req.params.id));

    return res.json({
      success: true,
      data: entity
    });
  };

  neighbors = async (req: Request, res: Response) => {
    const neighbors = await this.graph.explore(String(req.params.id));

    return res.json({
      success: true,
      data: neighbors
    });
  };

  incoming = async (req: Request, res: Response) => {
    const incoming = await this.graph.exploreIncoming(String(req.params.id));

    return res.json({
      success: true,
      data: incoming
    });
  };

  relationshipInspector = async (req: Request, res: Response) => {
    return res.json({
      success: true,
      data: {
        relationshipId: String(req.params.id)
      }
    });
  };
}
