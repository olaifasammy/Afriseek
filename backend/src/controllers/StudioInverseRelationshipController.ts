import { Request, Response } from "express";
import { InverseRelationshipService } from "../services/InverseRelationshipService";

export class StudioInverseRelationshipController {

  private service =
    new InverseRelationshipService();

  getAll = async (
    _req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data:
        await this.service.getAll()
    });
  };

  getByEntityType = async (
    req: Request,
    res: Response
  ) => {

    const data =
      await this.service.getByEntityType(
        String(req.params.entityType)
      );

    if (!data) {

      return res.status(404).json({
        success: false,
        message:
          "Ontology not found"
      });
    }

    return res.json({
      success: true,
      data
    });
  };
}
