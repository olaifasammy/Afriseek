import { Router } from "express";
import { StudioArticleRevisionController } from "../../controllers/article/StudioArticleRevisionController";

const router = Router();
const controller = new StudioArticleRevisionController();

router.get("/:id/revisions",controller.getRevisions);

export default router;
