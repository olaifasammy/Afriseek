import { Router } from "express";

import { EntityController }
from "../controllers/EntityController";

import { EntityService }
from "../services/EntityService";

import { createEntityRepository }
from "../bootstrap/createEntityRepository";

const router = Router();

const controller =
  new EntityController(
    new EntityService(
      createEntityRepository()
    )
  );

router.get(
  "/",
  controller.getAllEntities
);

router.get(
  "/:slug",
  controller.getEntityBySlug
);

export default router;
