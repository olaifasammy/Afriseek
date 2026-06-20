import { Router } from "express";
import { StudioInvitationController } from "../controllers/StudioInvitationController";

const router = Router();
const controller = new StudioInvitationController();

router.get("/", controller.getInvitations);
router.post("/", controller.createInvitation);

export default router;
