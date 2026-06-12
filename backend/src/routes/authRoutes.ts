import { Router } from "express";

import { AuthController }
from "../controllers/AuthController";

import { AuthService }
from "../modules/auth/AuthService";

import { createUserRepository }
from "../bootstrap/createUserRepository";

const router = Router();

const controller =
  new AuthController(
    new AuthService(
      createUserRepository()
    )
  );

router.post(
  "/login",
  controller.login
);

export default router;
