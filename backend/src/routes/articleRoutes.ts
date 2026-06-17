import { Router } from "express";
import { ArticleController } from "../controllers/ArticleController";
import { requireAuth } from "../middleware/requireAuth";
import { requireRole } from "../middleware/requireRole";
import { UserRole } from "../types/role";

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
  controller.updateArticle
);

export default router;
