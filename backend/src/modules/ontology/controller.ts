import { Request, Response } from 'express';
import { getAdminDatabase } from '../../config/supabaseAdmin';
import { AuthenticatedRequest } from '../../types/auth';

export const OntologyController = {
  // Ontologies
  async create(req: AuthenticatedRequest, res: Response) {
    const { slug, name, description } = req.body;
    const { data, error } = await getAdminDatabase().from('ontologies').insert([{ slug, name, description }] as any).select().single();
    if (error) return res.status(400).json({ success: false, error: error.message });
    return res.status(201).json({ success: true, data });
  },

  async list(_req: Request, res: Response) {
    const { data, error } = await getAdminDatabase().from('ontologies').select('*');
    if (error) return res.status(400).json({ success: false, error: error.message });
    return res.json({ success: true, data });
  },

  // Entity Types
  async createEntityType(req: AuthenticatedRequest, res: Response) {
    const { ontology_id, name, namespace, parent_id } = req.body;
    const { data, error } = await getAdminDatabase().from('entity_types').insert([{ ontology_id, name, namespace, parent_id }] as any).select().single();
    if (error) return res.status(400).json({ success: false, error: error.message });
    return res.status(201).json({ success: true, data });
  },

  // Property Definitions
  async createProperty(req: AuthenticatedRequest, res: Response) {
    const { entity_type_id, name, data_type, is_required } = req.body;
    const { data, error } = await getAdminDatabase().from('property_definitions').insert([{ entity_type_id, name, data_type, is_required }] as any).select().single();
    if (error) return res.status(400).json({ success: false, error: error.message });
    return res.status(201).json({ success: true, data });
  },

  // Relationship Definitions
  async createRelationship(req: AuthenticatedRequest, res: Response) {
    const { entity_type_id, target_entity_type_id, relationship_name, direction } = req.body;
    const { data, error } = await getAdminDatabase().from('relationship_definitions').insert([{ entity_type_id, target_entity_type_id, relationship_name, direction }] as any).select().single();
    if (error) return res.status(400).json({ success: false, error: error.message });
    return res.status(201).json({ success: true, data });
  },
};
