import { Request, Response } from "express";
import { EntityMediaService } from "../../../services/EntityMediaService";

export class StudioEntityMediaController {

private service =
new EntityMediaService();

get = async (req: Request,res: Response) =>
res.json({success:true,data:await this.service.get(String(req.params.entityId))});

update = async (req: Request,res: Response) =>
res.json({success:true,data:await this.service.update(String(req.params.entityId),req.body)});
}
