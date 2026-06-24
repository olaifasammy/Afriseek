import { Router } from "express";
import { StudioEntityTraitController } from "./controller";

const router = Router();
const controller = new StudioEntityTraitController();

router.get("/:entityId",controller.getAll);
router.post("/:entityId",controller.create);
router.patch("/:entityId/:traitIndex",controller.update);
router.delete("/:entityId/:traitIndex",controller.delete);

export default router;
