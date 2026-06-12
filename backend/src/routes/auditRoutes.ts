import { Router } from "express";

import { createAuditService }
from "../bootstrap/createAuditService";

const router = Router();

const audit =
  createAuditService();

router.get(
  "/",
  async (_req, res) => {

    res.json({
      success: true,
      data:
        await audit.getAll()
    });
  }
);

export default router;
