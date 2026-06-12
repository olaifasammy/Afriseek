import { Router }
from "express";

import { ArticleController }
from "../controllers/ArticleController";

import { requireSecretKey }
from "../middleware/requireSecretKey";

const router = Router();

const controller =
  new ArticleController();

router.get(
  "/",
  controller.getAllArticles
);

router.get(
  "/:slug",
  controller.getArticleBySlug
);

router.post(
  "/",
  requireSecretKey,
  controller.createArticle
);

router.put(
  "/:slug",
  requireSecretKey,
  controller.updateArticle
);

export default router;
