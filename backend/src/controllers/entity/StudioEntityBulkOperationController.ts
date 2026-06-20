import { Request, Response } from "express";
import { EntityBulkOperationService } from "../../services/entity/EntityBulkOperationService";

export class StudioEntityBulkOperationController {

private service =
new EntityBulkOperationService();

verify = async (
req: Request,
res: Response
) => {

return res.json({
  success: true,
  data: await this.service.verify(
    req.body.ids ?? []
  )
});

};
}
