import { Router } from "express";
import { StudioRequiredFieldController } from "../controllers/StudioRequiredFieldController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioRequiredFieldController();

  return controller.getAll(
    req,
    res
  );
});

router.get("/:entityType", async (req, res) => {

  const controller =
    new StudioRequiredFieldController();

  return controller.getByEntityType(
    req,
    res
  );
});

export default router;
