import { Router } from "express";
import { ArticleController } from "./controller";
import { requireAuth } from "../../middleware/requireAuth";
import { requireRole } from "../../middleware/requireRole";
import { validate } from "../../middleware/validate";
import { CreateArticleSchema, UpdateArticleSchema } from "../../validation/article/articleSchemas";
import { UserRole } from "../../types/role";

const router = Router();
const controller = new ArticleController();

router.get("/", controller.getAllArticles);
router.get("/:slug", controller.getArticleBySlug);

router.post(
  "/",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN,
    UserRole.ADMIN,
    UserRole.EDITOR
  ),
  validate(CreateArticleSchema),
  controller.createArticle
);

router.put(
  "/:slug",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN,
    UserRole.ADMIN,
    UserRole.EDITOR
  ),
  validate(UpdateArticleSchema),
  controller.updateArticle
);

export default router;
