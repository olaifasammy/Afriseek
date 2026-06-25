import { z } from 'zod';

export const OntologyDefinitionSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1).max(50),
  name: z.string().min(1).max(100),
  description: z.string().optional(),
  active: z.boolean().default(true),
  version: z.number().int().default(1),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type OntologyDefinition = z.infer<typeof OntologyDefinitionSchema>;
