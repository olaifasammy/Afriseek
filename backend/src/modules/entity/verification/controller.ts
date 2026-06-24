import { Request, Response } from "express";
import { EntityVerificationService } from "../../../services/EntityVerificationService";

export class StudioEntityVerificationController {

  private service =
    new EntityVerificationService();

  getStatus = async (
    req: Request,
    res: Response
  ) => {

    const result =
      await this.service.getStatus(
        String(req.params.id)
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
  };

  updateStatus = async (
    req: Request,
    res: Response
  ) => {

    const success =
      await this.service.updateStatus(
        String(req.params.id),
        Boolean(req.body.verified)
      );

    if (!success) {

      return res.status(404).json({
        success: false,
        message: "Entity not found"
      });
    }

    return res.json({
      success: true
    });
  };
}
