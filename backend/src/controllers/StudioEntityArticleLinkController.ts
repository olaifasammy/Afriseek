import { Request, Response } from "express";
import { EntityArticleLinkService } from "../services/EntityArticleLinkService";

export class StudioEntityArticleLinkController {

private service =
new EntityArticleLinkService();

getAll = async (req: Request,res: Response) =>
res.json({success:true,data:await this.service.getAll(String(req.params.entityId))});

create = async (req: Request,res: Response) =>
res.json({success:true,data:await this.service.create(String(req.params.entityId),String(req.body.articleId))});

delete = async (req: Request,res: Response) => {
await this.service.delete(String(req.params.entityId),String(req.params.articleId));
return res.json({success:true});
};
}
