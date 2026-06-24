import { Router } from "express";
import { SettingsController } from "../controllers/SettingsController";
import { requireAuth } from "../middleware/requireAuth";
import { requireRole } from "../middleware/requireRole";
import { validate } from "../middleware/validate";
import { UpdateSettingsSchema } from "../validation/settings/settingsSchemas";
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
  validate(UpdateSettingsSchema),
  controller.updateSettings
);

export default router;
