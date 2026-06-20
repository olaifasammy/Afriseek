import { Router } from "express";
import { StudioPermissionController } from "../controllers/StudioPermissionController";

const router = Router();
const controller = new StudioPermissionController();

router.get("/", controller.getPermissions);
router.post("/:id", controller.assignPermissions);

export default router;
