import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { requireAuth } from "../middleware/requireAuth";
import { requireRole } from "../middleware/requireRole";
import { UserRole } from "../types/role";

const router = Router();
const controller = new UserController();

router.get(
  "/",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN,
    UserRole.ADMIN
  ),
  controller.getAllUsers
);

router.get(
  "/:id",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN,
    UserRole.ADMIN
  ),
  controller.getUserById
);

router.patch(
  "/:id/role",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN
  ),
  controller.updateRole
);

router.patch(
  "/:id/active",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN
  ),
  controller.updateActive
);

router.delete(
  "/:id",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN
  ),
  controller.deleteUser
);

export default router;
