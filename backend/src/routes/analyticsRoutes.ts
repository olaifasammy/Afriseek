import { Router } from "express";
import { AnalyticsController } from "../controllers/AnalyticsController";
import { requireAuth } from "../middleware/auth/requireAuth";

const router = Router();

router.get("/dashboard", requireAuth, AnalyticsController.getDashboard);
router.post("/export/:type", requireAuth, AnalyticsController.exportReport);

export default router;
