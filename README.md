This is the source code of the [UKPersonalFinance Wiki](https://ukpersonal.finance), the wiki for [r/UKPersonalFinance](https://reddit.com/r/ukpersonalfinance).

## Editing content

> [!IMPORTANT]
>
> If proposing changes, we ask that you engage with us on [Discord](https://discord.gg/kaetMg8) first - ask to join the wiki channel, our primary communication channel. The bulk of contributors are not GitHub-natives.

Pages are [Markdown](https://www.markdownguide.org/basic-syntax/) files in [src/content/docs](src/content/docs), images are in [src/assets](src/assets). Each page has a frontmatter block at the top:

```md
---
title: Budgeting
description: Keeping track of where your money is going, and where you want it to go.
draft: true
---
```

Set `title` and `description` to SEO friendly values, then write the page as normal Markdown below. `draft: true` limits the page to the staging site, remove it once the page is ready to go live.

Easiest way to make a change: click the pencil icon on the file on GitHub and edit it there. If you don't have write access this opens a pull request which a [moderator](https://github.com/orgs/UKPersonalFinance/teams/moderators) can review and merge into `main`. If you do have write access you can commit directly.

Once it's on `main` it's automatically deployed to [staging.ukpersonal.finance](https://staging.ukpersonal.finance) (username: any, password: `flowchart`), and a moderator can promote it to [ukpersonal.finance](https://ukpersonal.finance) from there.

### Editing the sidebar

The left-hand menu is defined in [astro.config.mjs](astro.config.mjs). Find the `sidebar:` array and add, rename or reorder entries there, e.g.:

```js
{ label: "Savings Accounts", slug: "savings" },
```

`slug` is the page's filename without the extension (`savings.md` → `savings`). Be careful with the syntax, this is code so is picky.

## Development

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). Tool versions are pinned with [mise](https://mise.jdx.dev), install it and run `mise install`, then `just` to list the available tasks.
