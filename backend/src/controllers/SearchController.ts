import { Request, Response }
from "express";

import { SearchService }
from "../services/SearchService";

import { EntityService }
from "../services/EntityService";

import { createEntityRepository }
from "../bootstrap/createEntityRepository";

import { createArticleService }
from "../bootstrap/createArticleService";

const searchService =
  new SearchService(
    new EntityService(
      createEntityRepository()
    ),
    createArticleService()
  );

export class SearchController {

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
        await searchService.search(
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
