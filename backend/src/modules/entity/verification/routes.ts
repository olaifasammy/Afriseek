import { Router } from "express";
import { StudioEntityVerificationController } from "./controller";

const router = Router();

router.get("/:id", async (req, res) => {

  const controller =
    new StudioEntityVerificationController();

  return controller.getStatus(
    req,
    res
  );
});

router.patch("/:id", async (req, res) => {

  const controller =
    new StudioEntityVerificationController();

  return controller.updateStatus(
    req,
    res
  );
});

export default router;
