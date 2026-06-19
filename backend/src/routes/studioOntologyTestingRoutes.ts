import { Router } from "express";
import { StudioOntologyTestingController } from "../controllers/StudioOntologyTestingController";

const router = Router();

router.get("/", async (req, res) => {

  const controller =
    new StudioOntologyTestingController();

  return controller.run(
    req,
    res
  );
});

export default router;
