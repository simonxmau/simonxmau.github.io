import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import {SITE} from "@config";

export async function GET(context) {
    const posts = await getCollection('blog');
    return rss({
        title: SITE.title,
        description: SITE.description,
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.createtime,
            description: post.data.preview,
            customData: post.data.customData,
            link: `/posts/${post.slug}`,
        })),
    });
}