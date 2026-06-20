import { Request, Response } from "express";
import { EntitySearchService } from "../../services/entity/EntitySearchService";

export class StudioEntitySearchController {
  private service = new EntitySearchService();

  search = async (req: Request, res: Response) => {
    const q = String(req.query.q || "");

    res.json({
      success: true,
      data: await this.service.search(q)
    });
  };
}
