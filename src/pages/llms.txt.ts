import type { APIRoute } from "astro";
import { getCollection, render } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const pages = await getCollection(
    "docs",
    ({ id, data }) => !data.draft && id !== "404",
  );
  pages.sort((a, b) => a.id.localeCompare(b.id));

  const sections = await Promise.all(
    pages.map(async (page) => {
      const url = new URL(`/${page.id}/`, site);
      const { headings } = await render(page);
      const lines = headings
        .filter(({ depth }) => depth >= 2 && depth <= 3)
        .map(
          ({ depth, slug, text }) =>
            `${"  ".repeat(depth - 2)}- [${text}](${url}#${slug})`,
        );
      return [
        `## [${page.data.title}](${url})`,
        page.data.description,
        lines.join("\n"),
      ]
        .filter(Boolean)
        .join("\n\n");
    }),
  );

  const body = `# UKPersonalFinance Wiki\n\n${sections.join("\n\n")}\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
