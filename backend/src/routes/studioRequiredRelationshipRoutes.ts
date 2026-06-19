import { Router } from "express";
import { StudioRequiredRelationshipController } from "../controllers/StudioRequiredRelationshipController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioRequiredRelationshipController();

  return controller.getAll(
    req,
    res
  );
});

router.get("/:entityType", async (req, res) => {

  const controller =
    new StudioRequiredRelationshipController();

  return controller.getByEntityType(
    req,
    res
  );
});

export default router;
