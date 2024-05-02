import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.createtime).getTime() - SITE.scheduledPostMargin;

  if (SITE.onlyShowPublished) {
    return data.published && (import.meta.env.DEV || isPublishTimePassed);
  }

  return true;
};

export default postFilter;
