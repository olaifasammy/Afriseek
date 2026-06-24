import { Router } from "express";
import { OntologyController } from "../modules/ontology/controller";

const router = Router();

const controller = OntologyController;

router.get(
  "/",
  controller.list
);


export default router;
