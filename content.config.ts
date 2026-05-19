import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/**',
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        year: z.number(),
        role: z.string(),
        team: z.number().optional(),
        technologies: z.array(z.string()),
        model: z.string().optional(),
        cover: z.string(),
        gallery: z.array(z.string()).optional(),
        status: z.enum(['complete', 'in-progress', 'concept']),
        featured: z.boolean().default(false),
        order: z.number().optional(),
        draft: z.boolean().default(false),
      }),
    }),

    expertise: defineCollection({
      type: 'page',
      source: 'expertise/**',
      schema: z.object({
        title: z.string(),
        order: z.number(),
        year: z.number().default(1),
        level: z.number().min(1).max(5).default(1),
        icon: z.string().optional(),
        images: z.array(z.string()).optional(),
        summary: z.string(),
      }),
    }),

    vision: defineCollection({
      type: 'page',
      source: 'vision/**',
      schema: z.object({
        title: z.string(),
        year: z.number(),
        order: z.number(),
        subtitle: z.string().optional(),
      }),
    }),

    timeline: defineCollection({
      type: 'page',
      source: 'timeline/**',
      schema: z.object({
        year: z.string(),
        period: z.string(),
        theme: z.string(),
        status: z.enum(['complete', 'in-progress', 'future']),
        order: z.number(),
        aspiration: z.string().optional(),
        key_projects: z.array(z.object({ name: z.string(), slug: z.string() })).optional(),
        key_skills: z.array(z.string()).optional(),
        expertise_snapshot: z.object({
          business:   z.object({ status: z.string(), delta: z.string().optional() }),
          creativity: z.object({ status: z.string(), delta: z.string().optional() }),
          computing:  z.object({ status: z.string(), delta: z.string().optional() }),
          technology: z.object({ status: z.string(), delta: z.string().optional() }),
          society:    z.object({ status: z.string(), delta: z.string().optional() }),
        }).optional(),
      }),
    }),
  },
})
