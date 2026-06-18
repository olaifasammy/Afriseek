import { Router } from "express";
import { TimelineController } from "../controllers/TimelineController";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

const controller =
  new TimelineController();

router.get(
  "/:id",
  requireAuth,
  controller.getTimeline
);

export default router;
