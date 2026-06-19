import { Router } from "express";
import { StudioInverseRelationshipController } from "../controllers/StudioInverseRelationshipController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioInverseRelationshipController();

  return controller.getAll(
    req,
    res
  );
});

router.get("/:entityType", async (req, res) => {

  const controller =
    new StudioInverseRelationshipController();

  return controller.getByEntityType(
    req,
    res
  );
});

export default router;
