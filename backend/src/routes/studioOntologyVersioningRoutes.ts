import { Router } from "express";
import { StudioOntologyVersioningController } from "../controllers/StudioOntologyVersioningController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioOntologyVersioningController();

  return controller.getAll(
    req,
    res
  );
});

router.get("/:entityType", async (req, res) => {

  const controller =
    new StudioOntologyVersioningController();

  return controller.getByEntityType(
    req,
    res
  );
});

export default router;
