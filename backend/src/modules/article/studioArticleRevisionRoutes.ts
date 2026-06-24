import { Router } from "express";
import { StudioArticleRevisionController } from './StudioArticleRevisionController';

const router = Router();
const controller = new StudioArticleRevisionController();

router.get("/:id/revisions",controller.getRevisions);

export default router;
