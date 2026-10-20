import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const team = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/team', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      // Heading on the detail page, when it differs from the name.
      heading: z.string().optional(),
      photo: image(),
      order: z.number(),
      links: z.array(z.object({ label: z.string(), text: z.string(), href: z.string() })).default([]),
      interests: z.string().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { team, projects };
