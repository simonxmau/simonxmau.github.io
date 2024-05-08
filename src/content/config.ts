import {SITE} from "@config";
import { defineCollection, reference, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content', // v2.5.0 及之后
    schema: z.object({
        title: z.string(),
        aliases: z.array(z.string()).nullable().optional(),
        tags: z.array(z.string()).nullable(),
        createtime: z.date(),
        published: z.boolean().nullable().optional(),
        description: z.string().nullable().optional(),
        // author: z.string().default(SITE.author),
        // image: z.string().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
};