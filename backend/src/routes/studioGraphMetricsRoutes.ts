import { Router } from "express";
import { StudioGraphMetricsController } from "../controllers/StudioGraphMetricsController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioGraphMetricsController();

  return controller.getMetrics(
    req,
    res
  );
});

export default router;
