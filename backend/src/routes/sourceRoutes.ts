import { Router } from "express";
import { SourceController } from "../controllers/SourceController";
import { requireAuth } from "../middleware/auth/requireAuth";

const router = Router();

router.get("/", requireAuth, SourceController.list);
router.post("/", requireAuth, SourceController.create);
router.get("/:id", requireAuth, SourceController.getById);
router.patch("/:id", requireAuth, SourceController.update);
router.delete("/:id", requireAuth, SourceController.delete);

export default router;
