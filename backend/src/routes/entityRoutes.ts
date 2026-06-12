import { Router } from "express";
import { EntityController } from "../controllers/EntityController";
import { requireSecretKey } from "../middleware/requireSecretKey";

const router = Router();
const controller = new EntityController();

// Core public read endpoints
router.get("/", controller.getAllEntities);
router.get("/:slug", controller.getEntityBySlug);

// Mutating endpoints protected via secret key middleware
router.post("/", requireSecretKey, controller.createEntity);
router.put("/:id", requireSecretKey, controller.updateEntity);
router.delete("/:id", requireSecretKey, controller.deleteEntity);

export default router;
