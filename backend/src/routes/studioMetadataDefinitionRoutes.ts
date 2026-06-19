import { Router } from "express";
import { StudioMetadataDefinitionController } from "../controllers/StudioMetadataDefinitionController";

const router = Router();

const controller =
  new StudioMetadataDefinitionController();

router.get(
  "/",
  controller.getAll
);

router.get(
  "/:entityType",
  controller.getByEntityType
);

router.post(
  "/",
  controller.create
);

router.put(
  "/",
  controller.update
);

router.delete(
  "/:id",
  controller.delete
);

export default router;
