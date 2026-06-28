import { Request, Response }
from "express";

import { SearchService }
from "../services/SearchService";

import { EntityService }
from "../services/EntityService";

import { getDependencies }
from "../config/dependencies";

import { createArticleService }
from "../bootstrap/createArticleService";

import { createSearchIndexer }
from "../bootstrap/createSearchIndexer";

import { createAnalyticsService }
from "../bootstrap/createAnalyticsService";

export class SearchController {
  private searchService: SearchService;

  constructor() {
    const { entityRepository } = getDependencies();
    
    // Proper instantiation using factory functions as per architecture
    const searchIndexer = createSearchIndexer();
    const analyticsService = createAnalyticsService();
    
    this.searchService = new SearchService(
      new EntityService(entityRepository, searchIndexer, analyticsService),
      createArticleService()
    );
  }

  search = async (
    req: Request,
    res: Response
  ) => {

    try {

      const query =
        String(
          req.query.q || ""
        );

      const results =
        await this.searchService.search(
          query
        );

      return res.json({
        success: true,
        data: results
      });

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Search failed"
      });
    }
  };
}
