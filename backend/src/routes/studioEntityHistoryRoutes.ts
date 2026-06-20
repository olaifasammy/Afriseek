import { Router } from "express";
import { StudioEntityHistoryController } from "../controllers/StudioEntityHistoryController";

const router = Router();

router.get("/:entityId", async (req, res) => {

  const controller =
    new StudioEntityHistoryController();

  return controller.getHistory(
    req,
    res
  );
});

export default router;
