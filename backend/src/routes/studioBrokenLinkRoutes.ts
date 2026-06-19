import { Router } from "express";
import { StudioBrokenLinkController } from "../controllers/StudioBrokenLinkController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioBrokenLinkController();

  return controller.getAll(
    req,
    res
  );
});

export default router;
