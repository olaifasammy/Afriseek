import { Router } from "express";
import { StudioEntityIntegrityController } from "../../controllers/entity/StudioEntityIntegrityController";

const router = Router();
const controller = new StudioEntityIntegrityController();

router.get("/", controller.getReport);

export default router;
