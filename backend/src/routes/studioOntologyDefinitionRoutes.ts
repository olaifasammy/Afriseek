import { Router } from "express";
import { StudioOntologyDefinitionController } from "../controllers/StudioOntologyDefinitionController";

const router = Router();

router.get("/", async (req, res) =>
  new StudioOntologyDefinitionController()
    .getAll(req, res)
);

router.get("/:entityType", async (req, res) =>
  new StudioOntologyDefinitionController()
    .getByEntityType(req, res)
);

router.post("/", async (req, res) =>
  new StudioOntologyDefinitionController()
    .create(req, res)
);

router.put("/", async (req, res) =>
  new StudioOntologyDefinitionController()
    .update(req, res)
);

router.delete("/:id", async (req, res) =>
  new StudioOntologyDefinitionController()
    .delete(req, res)
);

export default router;
