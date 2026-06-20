import { Router } from "express";
import { StudioEntityAuditController } from "../../controllers/audit/StudioEntityAuditController";

const router = Router();

const controller =
  new StudioEntityAuditController();

router.get(
  "/:entityId",
  controller.getAudit
);

router.get(
  "/:entityId/history",
  controller.getHistory
);

router.get(
  "/:entityId/versions",
  controller.getVersions
);

export default router;
