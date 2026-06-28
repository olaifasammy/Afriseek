import { Router } from 'express';
import { RelationshipInstanceController } from '../controllers/RelationshipInstanceController';
import { requireAuth } from '../middleware/requireAuth';
import { requirePermission } from '../middleware/requirePermission';
import { auditAction } from '../middleware/auditAction';

const router = Router();
const controller = new RelationshipInstanceController();

// Administrative Relationship Instance Routes
router.use(requireAuth);

router.post('/relationships', requirePermission('admin:relationship:create'), auditAction('create_relationship', 'relationship'), controller.create);
router.delete('/relationships/:id', requirePermission('admin:relationship:delete'), auditAction('delete_relationship', 'relationship'), controller.delete);

export default router;
