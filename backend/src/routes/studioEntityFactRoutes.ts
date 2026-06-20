import { Router } from "express";
import { StudioEntityFactController } from "../controllers/StudioEntityFactController";

const router = Router();

const controller =
  new StudioEntityFactController();

router.get(
  "/:entityId",
  controller.getAll
);

router.post(
  "/:entityId",
  controller.create
);

router.patch(
  "/:entityId/:factId",
  controller.update
);

router.delete(
  "/:entityId/:factId",
  controller.delete
);

export default router;
