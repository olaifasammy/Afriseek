import { Router } from "express";
import { SecretKeyController } from "../controllers/SecretKeyController";

const router = Router();

// Fully decoupled controller initialization utilizing centralized container resolution
const controller = new SecretKeyController();

router.post("/verify", controller.verify);

export default router;

