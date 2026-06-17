import { Router } from "express";
import { createAuditService } from "../bootstrap/createAuditService";
import { requireAuth } from "../middleware/requireAuth";
import { requireRole } from "../middleware/requireRole";
import { UserRole } from "../types/role";

const router = Router();
const audit = createAuditService();

router.get(
  "/",
  requireAuth,
  requireRole(UserRole.HEAD_ADMIN),
  async (_req, res) => {
    res.json({
      success: true,
      data: await audit.getAll()
    });
  }
);

export default router;
