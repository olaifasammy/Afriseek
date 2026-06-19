import { Router } from "express";
import { StudioOrphanEntityController } from "../controllers/StudioOrphanEntityController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioOrphanEntityController();

  return controller.getAll(
    req,
    res
  );
});

export default router;
