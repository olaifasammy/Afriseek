import { Router } from "express";
import { AuthController } from "./controller";
import { authRateLimiter } from "../../middleware/authRateLimiter";
import { validate } from "../../middleware/validate";
import { LoginSchema, RegisterSchema } from "../../validation/authSchemas";

const router = Router();

// Map POST requests to the controller logic
router.post("/register", validate(RegisterSchema), AuthController.register);
router.post("/login", authRateLimiter, validate(LoginSchema), AuthController.login);
router.get("/verify-email", AuthController.verifyEmail);

export default router;
