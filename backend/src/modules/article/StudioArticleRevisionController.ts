import { Request, Response } from "express";
import { ArticleRevisionService } from "../../services/article/ArticleRevisionService";

export class StudioArticleRevisionController {

  private service =
    new ArticleRevisionService();

  getRevisions = async (req: Request,res: Response) => {
    res.json({
      success:true,
      data: await this.service.getRevisions(
        String(req.params.id)
      )
    });
  };
}
