import { Request, Response } from "express";
import { EntitySourceService } from "../../../services/EntitySourceService";

export class StudioEntitySourceController {

  private service =
    new EntitySourceService();

  getAll = async (
    req: Request,
    res: Response
  ) => {

    const entityId =
      String(req.params.entityId);

    return res.json({
      success: true,
      data: await this.service.getAll(
        entityId
      )
    });
  };

  create = async (
    req: Request,
    res: Response
  ) => {

    const entityId =
      String(req.params.entityId);

    return res.json({
      success: true,
      data: await this.service.create(
        entityId,
        req.body
      )
    });
  };

  update = async (
    req: Request,
    res: Response
  ) => {

    const entityId =
      String(req.params.entityId);

    const sourceId =
      String(req.params.sourceId);

    await this.service.update(
      entityId,
      sourceId,
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

    const entityId =
      String(req.params.entityId);

    const sourceId =
      String(req.params.sourceId);

    await this.service.delete(
      entityId,
      sourceId
    );

    return res.json({
      success: true
    });
  };
}
