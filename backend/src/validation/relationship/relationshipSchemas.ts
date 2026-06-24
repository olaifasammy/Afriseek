import { z } from "zod";

export const CreateRelationshipSchema = z.object({
  entityTypeId: z.string().uuid(),
  targetEntityTypeId: z.string().uuid(),
  relationshipName: z.string().min(1),
  direction: z.enum(["bidirectional", "unidirectional"]),
});
