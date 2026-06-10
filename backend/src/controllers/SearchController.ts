import { Request, Response } from "express";
import { SearchService } from "../services/SearchService";

export class SearchController {

  constructor(
    private searchService: SearchService
  ) {}

  search = async (
    req: Request,
    res: Response
  ) => {

    try {

      const query =
        String(req.query.q || "");

      const results =
        await this.searchService.search(
          query
        );

      return res.json({
        success: true,
        query,
        results
      });

    } catch {

      return res.status(500).json({
        success: false
      });

    }
  };
}
