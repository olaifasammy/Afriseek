import { Router } from "express";
import { StudioGraphExplorerController } from "../controllers/StudioGraphExplorerController";

const router = Router();
const controller = new StudioGraphExplorerController();

router.get("/", controller.explorer);

router.get("/node/:id", controller.nodeInspector);

router.get("/neighbors/:id", controller.neighbors);

router.get("/incoming/:id", controller.incoming);

router.get(
  "/relationship/:id",
  controller.relationshipInspector
);

export default router;
