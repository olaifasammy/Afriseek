import { Router } from "express";

import { EntityController }
from "../controllers/EntityController";

import { EntityService }
from "../services/EntityService";

import { createEntityRepository }
from "../bootstrap/createEntityRepository";

import { requireSecretKey }
from "../middleware/requireSecretKey";

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

router.post(
  "/",
  requireSecretKey,
  controller.createEntity
);

router.put(
  "/:id",
  requireSecretKey,
  controller.updateEntity
);

router.delete(
  "/:id",
  requireSecretKey,
  controller.deleteEntity
);

export default router;
