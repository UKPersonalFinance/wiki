import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const docsDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "src/content/docs",
);

export function getDraftSidebarGroup() {
  const items = fs
    .readdirSync(docsDir)
    .filter((file) => /\.mdx?$/.test(file))
    .filter((file) => {
      const frontmatter =
        fs.readFileSync(path.join(docsDir, file), "utf-8").split("---")[1] ??
        "";
      return /^draft:\s*true\s*$/m.test(frontmatter);
    })
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      return { label: slug, slug };
    });

  return { label: "Drafts", items };
}
