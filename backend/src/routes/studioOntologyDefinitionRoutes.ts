import express from 'express';
import { OntologyController } from '../modules/ontology/controller';
import { StudioOntologyDefinitionController } from '../controllers/StudioOntologyDefinitionController';
import { requireAuth } from '../middleware/requireAuth';
import { requirePermission } from '../middleware/requirePermission';
import { auditAction } from '../middleware/auditAction';
import { validate } from '../middleware/validate';
import { CreateOntologySchema } from '../validation/ontology/ontologySchemas';

const router = express.Router();
const controller = new StudioOntologyDefinitionController();

// Publicly list ontologies
router.get('/', OntologyController.list);

// Protected: Only authorized admins can manage ontology definitions
router.post('/', requireAuth, requirePermission('admin:ontology:create'), auditAction('create_ontology', 'ontology'), validate(CreateOntologySchema), OntologyController.create);
router.post('/entity-types', requireAuth, requirePermission('admin:ontology:update'), auditAction('create_entity_type', 'ontology'), OntologyController.createEntityType);
router.post('/properties', requireAuth, requirePermission('admin:ontology:update'), auditAction('create_property', 'ontology'), OntologyController.createProperty);
router.post('/relationships', requireAuth, requirePermission('admin:ontology:update'), auditAction('create_ontology_relationship', 'ontology'), OntologyController.createRelationship);

// Administrative lifecycle routes
router.patch('/:id/approve', requireAuth, requirePermission('admin:ontology:approve'), auditAction('approve_ontology', 'ontology'), controller.approve);
router.patch('/:id/status', requireAuth, requirePermission('admin:ontology:update'), auditAction('update_ontology_status', 'ontology'), controller.updateStatus);


export default router;
