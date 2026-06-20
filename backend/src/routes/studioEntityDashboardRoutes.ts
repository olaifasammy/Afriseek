import { Router } from "express";
import { StudioEntityDashboardController } from "../controllers/StudioEntityDashboardController";

const router = Router();

router.get("/", async (req,res) => {

return new StudioEntityDashboardController()
.getDashboard(req,res);
});

export default router;
