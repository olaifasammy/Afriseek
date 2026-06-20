import { Router } from "express";
import { StudioArticleCitationController } from "../../controllers/article/StudioArticleCitationController";

const router = Router();
const controller = new StudioArticleCitationController();

router.get("/:id/citations",controller.getCitations);

export default router;
