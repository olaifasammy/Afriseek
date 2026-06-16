import { Router } from "express";
import { OntologyController } from "../controllers/OntologyController";

const router = Router();

const controller =
  new OntologyController();

router.get(
  "/",
  controller.getAll
);

router.get(
  "/:entityType",
  controller.getByType
);

export default router;
