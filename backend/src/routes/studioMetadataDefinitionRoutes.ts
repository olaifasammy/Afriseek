import { Router } from "express";
import { StudioMetadataDefinitionController } from "../controllers/StudioMetadataDefinitionController";

const router = Router();

router.get("/", async (req, res) => {
  const controller =
    new StudioMetadataDefinitionController();

  return controller.getAll(
    req,
    res
  );
});

router.get("/:entityType", async (req, res) => {
  const controller =
    new StudioMetadataDefinitionController();

  return controller.getByEntityType(
    req,
    res
  );
});

export default router;
