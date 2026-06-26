import { Request, Response } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { getDependencies } from '../config/dependencies';

const { articleService } = getDependencies();

/**
 * Controller for managing Article lifecycle, strictly bound to Entities.
 */
export const ArticleController = {
  create: asyncHandler(async (req: Request, res: Response) => {
    const entityId = req.params.entityId as string;
    const article = await articleService.create(entityId, req.body);
    res.status(201).json(article);
  }),

  getByEntity: asyncHandler(async (req: Request, res: Response) => {
    const entityId = req.params.entityId as string;
    const articles = await articleService.getByEntity(entityId);
    res.json({ articles });
  }),

  update: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const article = await articleService.getBySlug(id);
    if (!article) {
      res.status(404).json({ message: "Article not found" });
      return;
    }
    const updatedArticle = { ...article, ...req.body };
    await articleService.update(updatedArticle);
    res.json(updatedArticle);
  }),

  delete: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await articleService.delete(id);
    res.status(204).json({ message: `Article ${id} deleted` });
  }),

  approve: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const article = await articleService.approve(id);
    res.status(200).json(article);
  }),
};

export default ArticleController;
