import { getCollection, type CollectionEntry } from "astro:content";

export type Locale = "zh" | "en";
export type ContentKind = "projects" | "writing" | "videos";
export type SiteEntry = CollectionEntry<ContentKind>;

export const routeSegment: Record<ContentKind, string> = {
  projects: "code",
  writing: "writing",
  videos: "video",
};

export async function getPublishedContent() {
  const [projects, writing, videos] = await Promise.all([
    getCollection("projects", ({ data }) => !data.draft),
    getCollection("writing", ({ data }) => !data.draft),
    getCollection("videos", ({ data }) => !data.draft),
  ]);

  const byDate = <T extends SiteEntry>(entries: T[]) =>
    [...entries].sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());

  return {
    projects: byDate(projects),
    writing: byDate(writing),
    videos: byDate(videos),
  };
}

export function entryPath(collection: ContentKind, entry: SiteEntry) {
  return `/${entry.data.lang}/${routeSegment[collection]}/${entry.data.slug}/`;
}

export function groupTranslations<T extends SiteEntry>(entries: T[]) {
  const groups = new Map<string, T[]>();
  for (const entry of entries) {
    const current = groups.get(entry.data.translationKey) ?? [];
    current.push(entry);
    groups.set(entry.data.translationKey, current);
  }
  return [...groups.values()];
}

export function localizedPair<T extends SiteEntry>(group: T[]) {
  const first = group[0];
  const zh = group.find((entry) => entry.data.lang === "zh") ?? first;
  const en = group.find((entry) => entry.data.lang === "en") ?? first;
  return { zh, en };
}

export function dateLabel(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}
