import { Request, Response } from "express";
import { createGraphEngine } from "../bootstrap/createGraphEngine";

export class StudioGraphPathController {
  private graph = createGraphEngine();

  findPath = async (req: Request, res: Response) => {
    const from = String(req.query.from ?? "");
    const to = String(req.query.to ?? "");

    const path = await this.graph.findPath(from, to);

    return res.json({
      success: true,
      data: path
    });
  };
}
