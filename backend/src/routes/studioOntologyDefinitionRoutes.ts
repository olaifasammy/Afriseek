import { Router } from "express";
import { StudioOntologyDefinitionController } from "../controllers/StudioOntologyDefinitionController";

const router = Router();

router.get("/", (req,res) =>
  new StudioOntologyDefinitionController()
    .getAll(req,res)
);

router.get("/:entityType", (req,res) =>
  new StudioOntologyDefinitionController()
    .getByEntityType(req,res)
);

router.post("/", (req,res) =>
  new StudioOntologyDefinitionController()
    .create(req,res)
);

router.put("/", (req,res) =>
  new StudioOntologyDefinitionController()
    .update(req,res)
);

router.delete("/:id", (req,res) =>
  new StudioOntologyDefinitionController()
    .delete(req,res)
);

export default router;
