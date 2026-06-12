import { Router } from "express";

import { SecretKeyController }
from "../controllers/SecretKeyController";

import { UserService }
from "../services/UserService";

import { SecretKeyService }
from "../modules/security/SecretKeyService";

import { createUserRepository }
from "../bootstrap/createUserRepository";

const router = Router();

const controller =
  new SecretKeyController(
    new UserService(
      createUserRepository()
    ),
    new SecretKeyService()
  );

router.post(
  "/verify",
  controller.verify
);

export default router;
