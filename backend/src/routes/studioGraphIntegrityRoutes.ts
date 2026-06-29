import { Router } from "express";
import { StudioGraphIntegrityController } from "../controllers/StudioGraphIntegrityController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioGraphIntegrityController();

  return controller.getReport(
    req,
    res
  );
});

router.get("/orphans", async (req, res) => {

  const controller =
    new StudioGraphIntegrityController();

  return controller.getOrphans(
    req,
    res
  );
});

export default router;
