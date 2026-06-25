import { Router } from 'express';
import AdminRoleController from '../controllers/AdminRoleController';
import { requireAuth } from '../middleware/requireAuth';
import { requirePermission } from '../middleware/requirePermission';
import { auditAction } from '../middleware/auditAction';

const router = Router();

// All routes require authentication and specific permissions
router.use(requireAuth);

router.get('/roles', requirePermission('admin:roles:view'), AdminRoleController.getRoles);
router.post('/users/:userId/roles', requirePermission('admin:roles:assign'), auditAction('assign_role', 'user'), AdminRoleController.assignRole);
router.delete('/users/:userId/roles/:role', requirePermission('admin:roles:revoke'), auditAction('revoke_role', 'user'), AdminRoleController.revokeRole);
router.get('/users/:userId/activity', requirePermission('admin:audit:view'), AdminRoleController.getUserActivity);

export default router;
