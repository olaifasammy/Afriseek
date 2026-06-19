import { Router } from "express";
import { StudioValidationRuleController } from "../controllers/StudioValidationRuleController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioValidationRuleController();

  return controller.getAll(
    req,
    res
  );
});

export default router;
