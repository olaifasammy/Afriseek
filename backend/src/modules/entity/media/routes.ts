import { Router } from "express";
import { StudioEntityMediaController } from "./controller";

const router = Router();
const controller = new StudioEntityMediaController();

router.get("/:entityId",controller.get);
router.patch("/:entityId",controller.update);

export default router;
