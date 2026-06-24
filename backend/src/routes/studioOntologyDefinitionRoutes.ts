import express from 'express';
import { OntologyController } from '../modules/ontology/controller';
import { requireAuth } from '../middleware/requireAuth';
import { requireRole } from '../middleware/requireRole';
import { validate } from '../middleware/validate';
import { CreateOntologySchema } from '../validation/ontology/ontologySchemas';
import { UserRole } from '../types/role';

const router = express.Router();

// Publicly list ontologies (or you may want to require auth)
router.get('/', OntologyController.list);

// Protected: Only HEAD_ADMIN can manage ontology definitions
router.post('/', requireAuth, requireRole(UserRole.HEAD_ADMIN), validate(CreateOntologySchema), OntologyController.create);
router.post('/entity-types', requireAuth, requireRole(UserRole.HEAD_ADMIN), OntologyController.createEntityType);
router.post('/properties', requireAuth, requireRole(UserRole.HEAD_ADMIN), OntologyController.createProperty);
router.post('/relationships', requireAuth, requireRole(UserRole.HEAD_ADMIN), OntologyController.createRelationship);

export default router;
