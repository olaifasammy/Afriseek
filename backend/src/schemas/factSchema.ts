import { z } from "zod";

export const FactSchema = z.object({
  id: z.string(),
  key: z.string(),
  label: z.string(),
  type: z.string(),
  confidence: z.string()
});

export type FactInput =
  z.infer<typeof FactSchema>;
