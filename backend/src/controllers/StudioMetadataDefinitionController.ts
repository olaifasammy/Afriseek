import { Request, Response } from "express";
import { MetadataDefinitionService } from "../services/MetadataDefinitionService";

export class StudioMetadataDefinitionController {

  private service =
    new MetadataDefinitionService();

  getAll = async (
    _req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data: this.service.getAll()
    });
  };

  getByEntityType = async (
    req: Request,
    res: Response
  ) => {

    const data =
      this.service.getByEntityType(
        String(
          req.params.entityType
        )
      );

    if (!data) {

      return res.status(404).json({
        success: false,
        message: "Ontology not found"
      });
    }

    return res.json({
      success: true,
      data
    });
  };

  create = async (
    req: Request,
    res: Response
  ) => {

    await this.service.create(
      req.body
    );

    return res.status(201).json({
      success: true
    });
  };

  update = async (
    req: Request,
    res: Response
  ) => {

    await this.service.update(
      req.body
    );

    return res.json({
      success: true
    });
  };

  delete = async (
    req: Request,
    res: Response
  ) => {

    await this.service.delete(
      String(req.params.id)
    );

    return res.json({
      success: true
    });
  };
}
