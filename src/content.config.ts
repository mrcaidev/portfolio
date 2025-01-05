import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({
    base: "src/content/blog",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    createdAt: z.date(),
  }),
});

export const collections = { blog };
