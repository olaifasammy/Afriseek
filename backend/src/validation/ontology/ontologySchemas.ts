import { z } from "zod";

export const CreateOntologySchema = z.object({
  slug: z.string().min(1).max(50),
  name: z.string().min(1).max(100),
  description: z.string().optional()
});
