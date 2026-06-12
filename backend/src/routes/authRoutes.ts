import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();

// The AuthController now cleanly pulls its required live repositories 
// directly from the centralized dependency container we built.
const controller = new AuthController();

// Map POST requests to the controller logic
router.post("/register", controller.register);
router.post("/login", controller.login);

export default router;
