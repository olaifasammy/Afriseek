import { Router } from "express";
import { StudioRelationshipController } from "../controllers/StudioRelationshipController";
import { requireAuth } from "../middleware/requireAuth";
import { requireRole } from "../middleware/requireRole";
import { UserRole } from "../types/role";

const router = Router();

router.get(
  "/",
  requireAuth,
  requireRole(
    UserRole.HEAD_ADMIN,
    UserRole.ADMIN
  ),
  async (req, res) => {

    const controller =
      new StudioRelationshipController();

    return controller.getAll(
      req,
      res
    );
  }
);

export default router;
