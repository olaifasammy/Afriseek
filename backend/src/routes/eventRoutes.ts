import { Router }
from "express";

import { EventController }
from "../controllers/EventController";

import { requireSecretKey }
from "../middleware/requireSecretKey";

const router = Router();

const controller =
  new EventController();

router.get(
  "/",
  controller.getAll
);

router.get(
  "/:slug",
  controller.getBySlug
);

router.post(
  "/",
  requireSecretKey,
  controller.create
);

export default router;
