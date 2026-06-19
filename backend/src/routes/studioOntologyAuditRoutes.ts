import { Router } from "express";
import { StudioOntologyAuditController } from "../controllers/StudioOntologyAuditController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioOntologyAuditController();

  return controller.getAudit(
    req,
    res
  );
});

export default router;
