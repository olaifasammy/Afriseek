import { Request, Response } from "express";
import { EntitySplitService } from "../services/EntitySplitService";

export class StudioEntitySplitController {

  private service =
    new EntitySplitService();

  split = async (
    req: Request,
    res: Response
  ) => {

    try {

      const result =
        await this.service.split(
          req.body.sourceEntityId,
          req.body.newEntity,
          req.body.move
        );

      return res.json({
        success: true,
        data: result
      });

    } catch (error) {

      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Split failed"
      });
    }
  };
}
