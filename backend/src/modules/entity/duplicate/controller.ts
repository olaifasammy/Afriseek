import { Request, Response } from "express";
import { EntityDuplicateDetectionService } from "../../../services/entity/EntityDuplicateDetectionService";

export class StudioEntityDuplicateController {

private service =
new EntityDuplicateDetectionService();

scan = async (
_req: Request,
res: Response
) => {

return res.json({
  success: true,
  data: await this.service.scan()
});

};
}
