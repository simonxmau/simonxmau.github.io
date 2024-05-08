// import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: string;
  description: string;
  title: string;
  // ogImage?: string;
  // lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
  onlyShowPublished: boolean;
};

// export type SocialObjects = {
//   name: keyof typeof socialIcons;
//   href: string;
//   active: boolean;
//   linkTitle: string;
// }[];

export type Post = {
  slug: string,
  data: {
    title: string,
    aliases: string[],
    tags: string[],
    createtime: string,
    published: boolean,
    description: string,
  },
  // slug: string,
  // description: string,
  // timestamp: number,
  // draft: boolean,
  // date: string,
  // file: URL,
}

