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

export default router;
