import { Request, Response } from "express";
import { EntityMergeService } from "../services/EntityMergeService";

export class StudioEntityMergeController {

  private service =
    new EntityMergeService();

  merge = async (
    req: Request,
    res: Response
  ) => {

    try {

      const result =
        await this.service.merge(
          String(
            req.body.sourceEntityId
          ),
          String(
            req.body.targetEntityId
          )
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
            : "Merge failed"
      });
    }
  };
}
