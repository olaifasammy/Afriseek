import { Request, Response } from "express";
import { EntityTimelineLinkService } from "../../services/entity/EntityTimelineLinkService";

export class StudioEntityTimelineController {

private service =
new EntityTimelineLinkService();

getLinks = async (
req: Request,
res: Response
) => {

return res.json({
  success: true,
  data: await this.service.getLinks(
    String(req.params.entityId)
  )
});

};
}
