import { Router } from "express";
import { EntityController } from "../controllers/EntityController";
import { requireAuth } from "../middleware/requireAuth";
import { requireRole } from "../middleware/requireRole";
import { UserRole } from "../types/role";

const router = Router();
const controller = new EntityController();

router.get("/", controller.getAllEntities);
router.get("/:slug", controller.getEntityBySlug);

router.post(
  "/",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN,
    UserRole.ADMIN,
    UserRole.EDITOR
  ),
  controller.createEntity
);

router.put(
  "/:id",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN,
    UserRole.ADMIN,
    UserRole.EDITOR
  ),
  controller.updateEntity
);

router.delete(
  "/:id",
  requireAuth,
  requireRole(UserRole.HEAD_ADMIN),
  controller.deleteEntity
);

export default router;
