import { Router } from "express";
import { StudioGraphPathController } from "../controllers/StudioGraphPathController";

const router = Router();
const controller = new StudioGraphPathController();

router.get("/", controller.findPath);

export default router;
