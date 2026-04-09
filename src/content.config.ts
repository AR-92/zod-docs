import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Zod Team'),
    authorImage: z.string().optional(),
    authorTwitter: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string(),
    order: z.number().default(0),
    prevLink: z.string().optional(),
    nextLink: z.string().optional(),
    prevTitle: z.string().optional(),
    nextTitle: z.string().optional(),
  }),
});

export const collections = { blog, docs };
