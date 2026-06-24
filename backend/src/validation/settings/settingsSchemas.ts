import { z } from "zod";

export const UpdateSettingsSchema = z.object({
  key: z.string().min(1),
  value: z.any(),
});
