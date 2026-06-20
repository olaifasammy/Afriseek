import { Router } from "express";
import { StudioEntityQualityController } from "../../controllers/entity/StudioEntityQualityController";

const router = Router();
const controller = new StudioEntityQualityController();

router.get("/", controller.getReport);

export default router;
