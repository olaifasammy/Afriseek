import { Router } from "express";
import { StudioRelationshipController } from "../controllers/StudioRelationshipController";
import { requireAuth } from "../middleware/requireAuth";
import { requireRole } from "../middleware/requireRole";
import { validate } from "../middleware/validate";
import { CreateRelationshipSchema } from "../validation/relationship/relationshipSchemas";
import { UserRole } from "../types/role";
import { auditAction } from "../middleware/auditAction";

const router = Router();
const controller = new StudioRelationshipController();

router.use(requireAuth);
router.use(requireRole(UserRole.HEAD_ADMIN, UserRole.ADMIN));

router.get("/", (req, res) => controller.getAll(req, res));
router.get("/:type", (req, res) => controller.getByType(req, res));
router.post("/", validate(CreateRelationshipSchema), auditAction('create_relationship', 'relationship'), (req, res) => controller.create(req, res));
router.put("/", auditAction('update_relationship', 'relationship'), (req, res) => controller.update(req, res));
router.delete("/:id", auditAction('delete_relationship', 'relationship'), (req, res) => controller.delete(req, res));

export default router;
