import { Request, Response } from "express";
import { ArticlePublicationService } from "../../services/article/ArticlePublicationService";

export class StudioArticlePublicationController {

  private service =
    new ArticlePublicationService();

  publish = async (req: Request,res: Response) => {
    res.json({
      success:true,
      data: await this.service.publish(
        String(req.params.id)
      )
    });
  };

  unpublish = async (req: Request,res: Response) => {
    res.json({
      success:true,
      data: await this.service.unpublish(
        String(req.params.id)
      )
    });
  };
}
