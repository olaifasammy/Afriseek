import { z } from "zod";

export const CreateEntitySchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1),
  name: z.string().min(1),
  entityType: z.string(), // Ideally use enum, but string for now
  summary: z.string(),
  traits: z.array(z.any()), // Would need separate schemas
  facts: z.array(z.any()),
  relationships: z.array(z.any()),
  sources: z.array(z.any()),
  metadata: z.object({
    createdAt: z.string(),
    updatedAt: z.string(),
    verified: z.boolean()
  })
});
