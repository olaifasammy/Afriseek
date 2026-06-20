import { Request, Response } from "express";
import { EntityFactService } from "../services/EntityFactService";

export class StudioEntityFactController {

  private service =
    new EntityFactService();

  getAll = async (
    req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data: await this.service.getAll(
        String(req.params.entityId)
      )
    });
  };

  create = async (
    req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data: await this.service.create(
        String(req.params.entityId),
        req.body
      )
    });
  };

  update = async (
    req: Request,
    res: Response
  ) => {

    await this.service.update(
      String(req.params.entityId),
      String(req.params.factId),
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
      String(req.params.entityId),
      String(req.params.factId)
    );

    return res.json({
      success: true
    });
  };
}
