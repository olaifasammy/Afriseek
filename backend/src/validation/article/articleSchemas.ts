import { z } from "zod";

export const CreateArticleSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1),
  title: z.string().min(1),
  content: z.string(),
  authorId: z.string().uuid(),
});

export const UpdateArticleSchema = z.object({
  content: z.string().optional(),
  title: z.string().optional(),
});
