Hello UKPF subreddit or discord member! Here is a step by step on how to help update the wiki :) 

## Make a github account

Go to https://github.com/signup and make an account. 

Your username will be public. We suggest picking a username based on your reddit or discord username, just so it's easier to recognise people. 

Your email address is visible by default but can be hidden - set this up by going to https://github.com/settings/emails and ticking "Keep my email address private").

## Making changes

This guide will walk you through making a small update, just to demonstrate the process. You are welcome to follow this guide purely for practice, your changes don't have to go live. 

There are a lot of screens to click through, that's because github allows for much more complicated setups than we're using. Don't be intimidated: 

1. If in doubt press the green button
2. You can't cause any problems on the live wiki so no stress

## Editing a wiki page

The wiki page files live in [src/content/docs](src/content/docs). Look for the page you want to edit, and click on it to open it. 

Press the pencil in the top right. You will now be prompted to 'fork' the repository: 

![contributing-fork](src/assets/contributing/contributing-fork.png)

A fork is like a personal copy of the wiki, that you can edit as much as you like. Press the green button to create one.

Make your changes to the page. Wiki pages are written in [Markdown](https://www.markdownguide.org/basic-syntax/), as used on reddit and discord, so should hopefully be familiar, and you can toggle between 'Edit' and 'Preview' to check your markdown has worked. 

To save your work, press the green 'Commit changes' button in the top right:

![contributing-commit](src/assets/contributing/contributing-commit.png)

You'll be prompted for a commit message. Write a short description of your update, then press the green 'Commit changes' button:

![contributing-commit-message](src/assets/contributing/contributing-commit-message.png)

Now go to Pull Requests in the navigation bar. It will look like:

![contributing-prs-welcome](src/assets/contributing/contributing-prs-wecome.png)

Press the green 'New Pull Request' button. You will now be taken to a preview of your Pull Request. It will show your commit (or commits, if you 'saved' multiple times), and a list of changes that have been made. 

![contributing-pr-confirm](src/assets/contributing/contributing-pr-confirm.png)

Press the green button, and you will get to this screen: 

![contributing-pr-open](src/assets/contributing/contributing-pr-open.png)

You can just press the green button again. You don't need to add a description, although you're welcome to add some comments here if you want. 

You will now (finally!) be sent to your Pull Request:

![contributing-pr-staging](src/assets/contributing/contributing-pr-staging.png)

Give github a minute and you should receive a reply from the **github-actions** bot, which builds a temporary version of the wiki with your changes included, so you can check everything worked correctly.

If you want to make edits you can go back to your file, edit it, and commit your changes. Your new commits will be included in your Pull Request, and the bot will update the preview (just give it a min - its comment will show as 'edited').

When you're happy with it, go to [Discord](https://discord.gg/kaetMg8) to tell us about it. We can then 'merge' it - accept your pull request to incorporate your changes into the live version.

It's better to make one update at a time. Don't bundle unrelated updates together in the same Pull Request, or if any of them end up requiring discussion the whole PR can end up waiting. It is possible to have multiple PRs for multiple separate changes, but I didn't want to go into that in this basic guide.  

## Creating new pages, updating the sidebar, adding images, etc

For more info on this kind of stuff, see the [readme](README.md). 

