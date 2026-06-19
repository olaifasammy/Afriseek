import { Request, Response } from "express";

import { getDependencies } from "../config/dependencies";
import { RelationshipTypeService } from "../services/RelationshipTypeService";

export class StudioRelationshipController {

  private service =
    new RelationshipTypeService(
      getDependencies()
        .relationshipTypeRepository
    );

  getAll = async (
    _req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data: await this.service.getAll()
    });
  };

  getByType = async (
    req: Request,
    res: Response
  ) => {

    const record =
      await this.service.getByType(
        String(req.params.type)
      );

    if (!record) {
      return res.status(404).json({
        success: false,
        message:
          "Relationship type not found"
      });
    }

    return res.json({
      success: true,
      data: record
    });
  };
}
