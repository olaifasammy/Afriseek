import { Request, Response } from "express";
import { getDependencies } from "../../../config/dependencies";

export class StudioEntityDuplicateController {
  scan = async (_req: Request, res: Response) => {
    try {
      const { entityRepository } = getDependencies();
      // Since EntityDuplicateDetectionService is not in dependencies,
      // we instantiate it here with the required repository.
      const { EntityDuplicateDetectionService } = require("../../../services/entity/EntityDuplicateDetectionService");
      const service = new EntityDuplicateDetectionService(entityRepository);
      
      return res.json({
        success: true,
        data: await service.scan()
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Internal server error." });
    }
  };
}
