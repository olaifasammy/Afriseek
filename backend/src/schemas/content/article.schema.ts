import { z } from 'zod';

export const ArticleVersionSchema = z.object({
  version: z.number().int(),
  content: z.string(),
  editorId: z.string().uuid(),
  createdAt: z.string().datetime(),
});

export const ArticleSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string(),
  entityIds: z.array(z.string().uuid()),
  published: z.boolean().default(false),
  versions: z.array(ArticleVersionSchema),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Article = z.infer<typeof ArticleSchema>;
export type ArticleVersion = z.infer<typeof ArticleVersionSchema>;
