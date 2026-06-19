import { Router } from "express";
import { StudioDuplicateNodeController } from "../controllers/StudioDuplicateNodeController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioDuplicateNodeController();

  return controller.getAll(
    req,
    res
  );
});

export default router;
