import { Router } from "express";
import { EntityController } from "./controller";
import { requireAuth } from "../../middleware/requireAuth";
import { requireRole } from "../../middleware/requireRole";
import { validate } from "../../middleware/validate";
import { CreateEntitySchema } from "../../validation/entity/entitySchemas";
import { UserRole } from "../../types/role";

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
  validate(CreateEntitySchema),
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

router.patch(
  "/:id/verify",
  requireAuth,
  requireRole(UserRole.HEAD_ADMIN, UserRole.ADMIN, UserRole.EDITOR),
  controller.verifyEntity
);

router.patch(
  "/:id/archive",
  requireAuth,
  requireRole(UserRole.HEAD_ADMIN, UserRole.ADMIN),
  controller.archiveEntity
);

router.patch(
  "/:id/restore",
  requireAuth,
  requireRole(UserRole.HEAD_ADMIN, UserRole.ADMIN),
  controller.restoreEntity
);

export default router;
