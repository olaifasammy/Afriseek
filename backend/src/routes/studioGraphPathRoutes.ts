import { Router } from "express";
import { StudioGraphPathController } from "../controllers/StudioGraphPathController";
import { validate } from "../middleware/validate";
import { GraphPathSchema } from "../validation/graph/graphSchemas";

const router = Router();
const controller = new StudioGraphPathController();

router.get("/", validate(GraphPathSchema), controller.findPath);

export default router;
