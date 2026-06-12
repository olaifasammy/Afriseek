import { Request, Response }
from "express";

import { createContextExplorerService }
from "../bootstrap/createContextExplorerService";

import { createIntelligentContextService }
from "../bootstrap/createIntelligentContextService";

const service =
  createContextExplorerService();

const intelligent =
  createIntelligentContextService();

export class ContextController {

  explore = async (
    req: Request,
    res: Response
  ) => {

    try {

      const slug =
        String(req.params.slug);

      const result =
        await service.explore(
          slug
        );

      if (!result) {

        return res.status(404).json({
          success: false,
          message: "Entity not found"
        });
      }

      return res.json({
        success: true,
        data: result
      });

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Context lookup failed"
      });
    }
  };

  intelligentExplore = async (
    req: Request,
    res: Response
  ) => {

    try {

      const slug =
        String(req.params.slug);

      const result =
        await intelligent.build(
          slug
        );

      if (!result) {

        return res.status(404).json({
          success: false,
          message: "Entity not found"
        });
      }

      return res.json({
        success: true,
        data: result
      });

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Intelligent context failed"
      });
    }
  };
}
