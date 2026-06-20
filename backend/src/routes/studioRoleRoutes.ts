import { Router } from "express";
import { StudioRoleController } from "../controllers/StudioRoleController";

const router = Router();
const controller = new StudioRoleController();

router.get("/", controller.getRoles);

export default router;
