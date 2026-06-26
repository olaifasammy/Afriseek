import { Router } from "express";
import { StudioRelationshipController } from "../controllers/StudioRelationshipController";
import { requireAuth } from "../middleware/requireAuth";
import { requireRole } from "../middleware/requireRole";
import { validate } from "../middleware/validate";
import { CreateRelationshipSchema } from "../validation/relationship/relationshipSchemas";
import { UserRole } from "../types/role";

const router = Router();
const controller = new StudioRelationshipController();

router.use(requireAuth);
router.use(requireRole(UserRole.HEAD_ADMIN, UserRole.ADMIN));

router.get("/", (req, res) => controller.getAll(req, res));
router.get("/:type", (req, res) => controller.getByType(req, res));
router.post("/", validate(CreateRelationshipSchema), (req, res) => controller.create(req, res));
router.put("/", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;
