import { Router } from "express";

import { UserController }
from "../controllers/UserController";

import { UserService }
from "../services/UserService";

import { createUserRepository }
from "../bootstrap/createUserRepository";

const router = Router();

const controller =
  new UserController(
    new UserService(
      createUserRepository()
    )
  );

router.get(
  "/",
  controller.getAllUsers
);

export default router;
