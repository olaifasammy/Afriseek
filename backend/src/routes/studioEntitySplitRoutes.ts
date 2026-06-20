import { Router } from "express";
import { StudioEntitySplitController } from "../controllers/StudioEntitySplitController";

const router = Router();

router.post("/", async (req, res) => {

  const controller =
    new StudioEntitySplitController();

  return controller.split(
    req,
    res
  );
});

export default router;
