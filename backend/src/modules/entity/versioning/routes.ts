import { Router } from "express";
import { StudioEntityVersioningController } from "../controllers/StudioEntityVersioningController";

const router = Router();

router.get("/:entityId", async (req, res) => {

  const controller =
    new StudioEntityVersioningController();

  return controller.getVersions(
    req,
    res
  );
});

export default router;
