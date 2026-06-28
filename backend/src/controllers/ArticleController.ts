import { Request, Response } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { getDependencies } from '../config/dependencies';
import { AuthenticatedRequest } from '../types/auth';

const { articleService } = getDependencies();

/**
 * Controller for managing Article lifecycle, strictly bound to Entities.
 */
export const ArticleController = {
  create: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const actorId = req.user!.userId;
    const article = await articleService.create(actorId, req.body);
    res.status(201).json(article);
  }),

  getByEntity: asyncHandler(async (req: Request, res: Response) => {
    const entityId = req.params.entityId as string;
    const articles = await articleService.getByEntity(entityId);
    res.json({ articles });
  }),

  update: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const actorId = req.user!.userId;
    const id = req.params.id as string;
    const article = await articleService.getBySlug(id);
    if (!article) {
      res.status(404).json({ message: "Article not found" });
      return;
    }
    const updatedArticle = { ...article, ...req.body };
    await articleService.update(actorId, id, updatedArticle);
    res.json(updatedArticle);
  }),

  delete: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const actorId = req.user!.userId;
    const id = req.params.id as string;
    await articleService.delete(actorId, id);
    res.status(204).json({ message: `Article ${id} deleted` });
  }),

  approve: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const actorId = req.user!.userId;
    const id = req.params.id as string;
    const article = await articleService.approve(actorId, id);
    res.status(200).json(article);
  }),
};

export default ArticleController;
