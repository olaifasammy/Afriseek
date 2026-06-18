import { Request, Response } from "express";
import { getDependencies } from "../config/dependencies";

export class RelationshipController {

  getByEntity = async (
    req: Request,
    res: Response
  ) => {

    try {

      const entityId =
        String(req.params.id);

      const { entityRepository } =
        getDependencies();

      const entity =
        await entityRepository.findById(
          entityId
        );

      if (!entity) {
        return res.status(404).json({
          success: false,
          message: "Entity not found"
        });
      }

      return res.json({
        success: true,
        data: entity.relationships
      });

    } catch {

      return res.status(500).json({
        success: false
      });
    }
  };
}
