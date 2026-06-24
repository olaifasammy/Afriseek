import { Router } from "express";
import { StudioArticlePublicationController } from './StudioArticlePublicationController';

const router = Router();
const controller = new StudioArticlePublicationController();

router.post("/:id/publish",controller.publish);
router.post("/:id/unpublish",controller.unpublish);

export default router;
