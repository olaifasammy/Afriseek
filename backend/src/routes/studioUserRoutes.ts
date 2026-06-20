import { Router } from "express";
import { StudioUserController } from "../controllers/StudioUserController";

const router = Router();
const controller = new StudioUserController();

router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);
router.post("/", controller.createUser);
router.patch("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);
router.post("/:id/suspend", controller.suspendUser);
router.post("/:id/activate", controller.activateUser);

export default router;
