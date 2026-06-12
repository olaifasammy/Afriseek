import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

// Fully decoupled controller initialization utilizing centralized container resolution
const controller = new UserController();

router.get("/", controller.getAllUsers);

export default router;
;
