import { Router } from "express";
import { StudioEntitySearchController } from "../../controllers/entity/StudioEntitySearchController";

const router = Router();
const controller = new StudioEntitySearchController();

router.get("/", controller.search);

export default router;
