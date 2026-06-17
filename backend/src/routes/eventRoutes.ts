import { Router } from "express";
import { EventController } from "../controllers/EventController";
import { requireAuth } from "../middleware/requireAuth";
import { requireRole } from "../middleware/requireRole";
import { UserRole } from "../types/role";

const router = Router();
const controller = new EventController();

router.get("/", controller.getAll);
router.get("/:slug", controller.getBySlug);

router.post(
  "/",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN,
    UserRole.ADMIN,
    UserRole.EDITOR
  ),
  controller.create
);

export default router;
