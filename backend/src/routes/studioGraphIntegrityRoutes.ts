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

export default router;
