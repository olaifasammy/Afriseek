import { z } from 'zod';

export const EntityBaseSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1).max(100),
  name: z.string().min(1).max(255),
  entityTypeId: z.string().uuid(),
  summary: z.string().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  metadata: z.record(z.string(), z.any()),
});

export type EntityBase = z.infer<typeof EntityBaseSchema>;
