import { Router } from "express";
import { MediaController } from "../controllers/MediaController";
import { requireAuth } from "../middleware/auth/requireAuth";

const router = Router();

router.get("/", requireAuth, MediaController.list);
router.post("/upload", requireAuth, MediaController.upload);
router.get("/:id", requireAuth, MediaController.getById);
router.patch("/:id", requireAuth, MediaController.update);
router.delete("/:id", requireAuth, MediaController.delete);

export default router;
