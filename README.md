This is the source code for the [UKPersonalFinance Wiki](https://ukpersonal.finance), the wiki for [r/UKPersonalFinance](https://reddit.com/r/ukpersonalfinance).

## Editing Content

> [!IMPORTANT]
>
> If proposing changes, we ask that you engage with us on [Discord](https://discord.gg/kaetMg8) first - ask to join the wiki channel, our primary communication channel. The bulk of contributors are not GitHub-natives.

Pages are [Markdown](https://www.markdownguide.org/basic-syntax/) files in [src/content/docs](src/content/docs), images are in [src/assets](src/assets). A few pages are `.mdx` instead of `.md`, which lets them use [Starlight components](https://starlight.astro.build/components/using-components/) inline, but you can mostly treat them the same as Markdown for normal edits. Each page has a frontmatter block at the top:

```md
---
title: Budgeting
description: Keeping track of where your money is going, and where you want it to go.
draft: true
---
```

Set `title` and `description` to SEO friendly values, then write the page as normal Markdown below. `draft: true` limits the page to the staging site, remove it once the page is ready to go live.

To make a change click the pencil icon on one of the files found in [src/content/docs](src/content/docs) and edit it there. Once done click "Commit changes..." top right. You'll be given a choice to commit directly (if you have access), or open a "pull request" — a way of proposing your change so others can review it before it goes live. Generally its advised to go with a pull request.

See GitHub's guide on [editing files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) for a walkthrough with screenshots.

Once your pull request is merged by a [moderator](https://github.com/orgs/UKPersonalFinance/teams/moderators) it's automatically deployed to [staging.ukpersonal.finance](https://staging.ukpersonal.finance) (username: any, password: `flowchart`), and a moderator can promote it to production at [ukpersonal.finance](https://ukpersonal.finance) from there.

If any of this is unclear, hop on [Discord](https://discord.gg/kaetMg8) and we'd be happy to help.

### Markdown Extras

The site runs Starlight which offers a few extra extensions to Markdown which you can find [here](https://starlight.astro.build/guides/authoring-content/), we mostly make use of "asides".

### Editing the Sidebar

The left-hand menu is defined in [astro.config.mjs](astro.config.mjs). Find the `sidebar:` array and add, rename or reorder entries there, e.g.:

```js
{ label: "Savings Accounts", slug: "savings" },
```

`slug` is the page's filename without the extension (`savings.md` → `savings`). Be careful with the syntax, this is code so is picky.

## Development

This section is intended for people developing the code to the site, ignore if you're just here to add content.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). Tool versions are pinned with [mise](https://mise.jdx.dev), install it and run `mise install`, then `just` to list the available tasks.
