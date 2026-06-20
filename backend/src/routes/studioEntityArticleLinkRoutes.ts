import { Router } from "express";
import { StudioEntityArticleLinkController } from "../controllers/StudioEntityArticleLinkController";

const router = Router();
const controller = new StudioEntityArticleLinkController();

router.get("/:entityId",controller.getAll);
router.post("/:entityId",controller.create);
router.delete("/:entityId/:articleId",controller.delete);

export default router;
