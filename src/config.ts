import type {Site} from "./types";

export const SITE: Site = {
    website: "https://simonmau.me",
    author: "Simon Mau",
    description: "Simon Mau's personal website",
    title: "Simon's Blog",
    postPerPage: 10,
    scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
    onlyShowPublished: false,
}