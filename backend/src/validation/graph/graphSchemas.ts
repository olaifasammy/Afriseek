import { z } from "zod";

export const GraphPathSchema = z.object({
  startNodeId: z.string().uuid(),
  endNodeId: z.string().uuid(),
  maxDepth: z.number().int().min(1).max(10).optional(),
});
