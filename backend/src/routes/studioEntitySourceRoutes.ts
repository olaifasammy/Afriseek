import { Router } from "express";
import { StudioEntitySourceController } from "../controllers/StudioEntitySourceController";

const router = Router();

router.get("/:entityId", (req, res) =>
  new StudioEntitySourceController()
    .getAll(req, res)
);

router.post("/:entityId", (req, res) =>
  new StudioEntitySourceController()
    .create(req, res)
);

router.patch("/:entityId/:sourceId", (req, res) =>
  new StudioEntitySourceController()
    .update(req, res)
);

router.delete("/:entityId/:sourceId", (req, res) =>
  new StudioEntitySourceController()
    .delete(req, res)
);

export default router;
