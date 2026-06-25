import { z } from 'zod';

export const RelationshipSchema = z.object({
  id: z.string().uuid(),
  sourceEntityId: z.string().uuid(),
  targetEntityId: z.string().uuid(),
  type: z.string(), // Mapping to RelationshipType enum
  strength: z.enum(['weak', 'moderate', 'strong', 'core']),
  weight: z.number().optional(),
  description: z.string().optional(),
  createdAt: z.string().datetime(),
});

export type Relationship = z.infer<typeof RelationshipSchema>;
