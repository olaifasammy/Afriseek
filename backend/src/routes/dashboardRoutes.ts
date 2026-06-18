import { Router } from "express";
import { DashboardController } from "../controllers/DashboardController";
import { requireAuth } from "../middleware/requireAuth";
import { requireRole } from "../middleware/requireRole";
import { UserRole } from "../types/role";

const router = Router();

const controller =
  new DashboardController();

router.get(
  "/",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN,
    UserRole.ADMIN
  ),
  controller.getStats
);

export default router;
