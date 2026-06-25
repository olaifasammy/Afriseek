import { Router } from 'express';
import EntityController from '../controllers/EntityController';
import ArticleController from '../controllers/ArticleController';
import { requireAuth } from '../middleware/requireAuth';
import { requirePermission } from '../middleware/requirePermission';
import { auditAction } from '../middleware/auditAction';

const router = Router();

// Administrative Entity Routes
router.use(requireAuth);

router.post('/entities', requirePermission('admin:entity:create'), auditAction('create_entity', 'entity'), EntityController.create);
router.get('/entities/:id', requirePermission('admin:entity:view'), EntityController.getById);
router.put('/entities/:id', requirePermission('admin:entity:update'), auditAction('update_entity', 'entity'), EntityController.update);
router.delete('/entities/:id', requirePermission('admin:entity:delete'), auditAction('delete_entity', 'entity'), EntityController.delete);

// Administrative Article Routes (Bound to Entity)
router.post('/entities/:entityId/articles', requirePermission('admin:article:create'), auditAction('create_article', 'article'), ArticleController.create);
router.get('/entities/:entityId/articles', requirePermission('admin:article:view'), ArticleController.getByEntity);
router.put('/articles/:id', requirePermission('admin:article:update'), auditAction('update_article', 'article'), ArticleController.update);
router.patch('/articles/:id/approve', requirePermission('admin:article:approve'), auditAction('approve_article', 'article'), ArticleController.approve);
router.delete('/articles/:id', requirePermission('admin:article:delete'), auditAction('delete_article', 'article'), ArticleController.delete);

export default router;
