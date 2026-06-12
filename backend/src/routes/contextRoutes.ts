import { Router }
from "express";

import { ContextController }
from "../controllers/ContextController";

const router = Router();

const controller =
  new ContextController();

router.get(
  "/:slug",
  controller.explore
);

router.get(
  "/:slug/intelligent",
  controller.intelligentExplore
);

export default router;
