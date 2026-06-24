import { Router } from "express";
import { RelationshipController } from "../controllers/RelationshipController";
import { requireAuth } from "../middleware/requireAuth";
import { validate } from "../middleware/validate";
import { CreateRelationshipSchema } from "../validation/relationship/relationshipSchemas";

const router = Router();
const controller = new RelationshipController();

router.get("/:id", requireAuth, controller.getByEntity);

export default router;
