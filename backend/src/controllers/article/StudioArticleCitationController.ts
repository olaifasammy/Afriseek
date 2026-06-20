import { Request, Response } from "express";
import { ArticleCitationService } from "../../services/article/ArticleCitationService";

export class StudioArticleCitationController {

  private service =
    new ArticleCitationService();

  getCitations = async (req: Request,res: Response) => {
    res.json({
      success:true,
      data: await this.service.getCitations(
        String(req.params.id)
      )
    });
  };
}
