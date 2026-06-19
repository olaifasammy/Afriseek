import { Request, Response } from "express";
import { RequiredRelationshipService } from "../services/RequiredRelationshipService";

export class StudioRequiredRelationshipController {

  private service =
    new RequiredRelationshipService();

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
