import { Request, Response } from "express";

export class StudioArticleController {

  list = async (_req: Request,res: Response) => {
    res.json({ success:true,data:[] });
  };

  create = async (_req: Request,res: Response) => {
    res.json({ success:true });
  };

  update = async (_req: Request,res: Response) => {
    res.json({ success:true });
  };

  remove = async (_req: Request,res: Response) => {
    res.json({ success:true });
  };
}
