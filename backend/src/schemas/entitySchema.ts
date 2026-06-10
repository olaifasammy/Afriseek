import { z } from "zod";

export const EntitySchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  entityType: z.string(),
  summary: z.string(),
  traits: z.record(z.string(), z.any()),
  relationships: z.array(z.any()),
  sources: z.array(z.any())
});

export type EntityInput =
  z.infer<typeof EntitySchema>;
