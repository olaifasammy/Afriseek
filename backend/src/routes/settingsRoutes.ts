import { Router } from "express";
import { SettingsController } from "../controllers/SettingsController";
import { requireAuth } from "../middleware/requireAuth";
import { requireRole } from "../middleware/requireRole";
import { UserRole } from "../types/role";

const router = Router();

const controller =
  new SettingsController();

router.get(
  "/",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN,
    UserRole.ADMIN
  ),
  controller.getSettings
);

router.put(
  "/",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN
  ),
  controller.updateSettings
);

export default router;
