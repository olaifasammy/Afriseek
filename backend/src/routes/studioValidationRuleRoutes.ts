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

router.post("/", async (req, res) => {

  const controller =
    new StudioValidationRuleController();

  return controller.create(
    req,
    res
  );
});

router.put("/:id", async (req, res) => {

  const controller =
    new StudioValidationRuleController();

  return controller.update(
    req,
    res
  );
});

router.delete("/:id", async (req, res) => {

  const controller =
    new StudioValidationRuleController();

  return controller.delete(
    req,
    res
  );
});

export default router;
