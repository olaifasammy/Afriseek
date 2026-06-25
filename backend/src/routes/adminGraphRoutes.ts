import { Router } from 'express';
import AdminGraphController from '../controllers/AdminGraphController';
import { requireAuth } from '../middleware/requireAuth';
import { requirePermission } from '../middleware/requirePermission';
import { auditAction } from '../middleware/auditAction';

const router = Router();

// Administrative Graph Management Routes
router.use(requireAuth);

router.post('/graphs', requirePermission('admin:graph:create'), auditAction('create_graph', 'graph'), AdminGraphController.create);
router.put('/graphs/:id', requirePermission('admin:graph:update'), auditAction('update_graph', 'graph'), AdminGraphController.update);
router.delete('/graphs/:id', requirePermission('admin:graph:delete'), auditAction('delete_graph', 'graph'), AdminGraphController.delete);

export default router;
