import { Request, Response } from "express";
import { EntityTraitService } from "../services/EntityTraitService";

export class StudioEntityTraitController {

private service =
new EntityTraitService();

getAll = async (req: Request,res: Response) =>
res.json({success:true,data:await this.service.getAll(String(req.params.entityId))});

create = async (req: Request,res: Response) =>
res.json({success:true,data:await this.service.create(String(req.params.entityId),req.body)});

update = async (req: Request,res: Response) => {
await this.service.update(String(req.params.entityId),Number(req.params.traitIndex),req.body);
return res.json({success:true});
};

delete = async (req: Request,res: Response) => {
await this.service.delete(String(req.params.entityId),Number(req.params.traitIndex));
return res.json({success:true});
};
}
