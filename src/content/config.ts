import { defineCollection, z } from 'astro:content';
const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    coverCaption: z.string().optional(),
    coverCredit: z.string().optional(),
    coverCreditUrl: z.string().url().optional(),
    references: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      note: z.string(),
    })).default([]),
    summary: z.string().optional(),
  }),
});
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    coverCaption: z.string().optional(),
    coverCredit: z.string().optional(),
    coverCreditUrl: z.string().url().optional(),
    references: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      note: z.string(),
    })).default([]),
    summary: z.string().optional(),
  }),
});
export const collections = { cases, articles };
