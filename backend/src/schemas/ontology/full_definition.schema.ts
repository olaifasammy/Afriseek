import { z } from 'zod';

export const OntologyDefinitionSchema = z.object({
  entityType: z.string(),
  label: z.string(),
  parentType: z.string().optional(),
  domain: z.string(),
  description: z.string().optional(),
  metadata: z.array(z.any()), // Refine as needed
  relationships: z.array(z.any()), // Refine as needed
  sections: z.array(z.any()), // Refine as needed
});

export type OntologyDefinition = z.infer<typeof OntologyDefinitionSchema>;
