import { Router } from "express";
import { StudioEntityMergeController } from "./controller";

const router = Router();

router.post("/", async (req, res) => {

  const controller =
    new StudioEntityMergeController();

  return controller.merge(
    req,
    res
  );
});

export default router;
