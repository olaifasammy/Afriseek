import { Request, Response } from "express";
import { ArticlePublicationService } from "../../services/article/ArticlePublicationService";
import { createAuditService } from "../../bootstrap/createAuditService";
import { createArticleRepository } from "../../bootstrap/createArticleRepository";

export class StudioArticlePublicationController {

  private get service() {
    return new ArticlePublicationService(createArticleRepository(), createAuditService());
  }

  publish = async (req: Request, res: Response) => {
    const actorId = String(req.headers["x-user-id"] || "unknown");
    res.json({
      success: true,
      data: await this.service.publish(actorId, String(req.params.id))
    });
  };

  unpublish = async (req: Request, res: Response) => {
    const actorId = String(req.headers["x-user-id"] || "unknown");
    res.json({
      success: true,
      data: await this.service.unpublish(actorId, String(req.params.id))
    });
  };
}
