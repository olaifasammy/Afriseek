import { Router } from "express";
import { createAuditService } from "../bootstrap/createAuditService";
import { requireAuth } from "../middleware/requireAuth";
import { requirePermission } from "../middleware/requirePermission";

const router = Router();
const audit = createAuditService();

router.get(
  "/",
  requireAuth,
  requirePermission("admin:audit:view"),
  async (_req, res) => {
    res.json({
      success: true,
      data: await audit.getAll()
    });
  }
);

export default router;
