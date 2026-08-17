Hello UKPF subreddit or discord member! Here is a step by step on how to help update the wiki :) 

## Make a github account

Go to https://github.com/signup and make an account. You may want a username that includes your reddit or discord username. 

Your username will be public. You may want a username that includes your reddit or discord username. 

Your email address is visible by default but can be hidden - set this up by going to https://github.com/settings/emailsand ticking "Keep my email address private").

## Editing a wiki page

Let's start with a small update just to walk through the process. You can do this just for practice, it doesn't have to go live. 

The wiki page files live in [src/content/docs](src/content/docs). Look for the page you want to edit, and click on it to open it. 

Press the pencil in the top right. You will now be prompted to 'fork' the repository: 

![contributing-fork](../../assets/images/contributing/contributing-fork.png)

 A fork is like a personal copy of the wiki, that you can edit as much as you like. Press the green fork button to create one

Make your changes to your page. Wiki pages are written in [Markdown](https://www.markdownguide.org/basic-syntax/), as used on reddit and discord. You can use the preview to view your markdown. Then press Commit in the top right:

![contributing-commit](../../assets/images/contributing/contributing-commit.png)

You'll be prompted for a commit message. Write what you updated, then press the green Commit button:

![contributing-commit-message](../../assets/images/contributing/contributing-commit-message.png)

Now go to Pull Requests in the navigation bar. It should look like:

![contributing-prs-welcome](../../assets/images/contributing/contributing-prs-welcome.png)

Press the green 'New Pull Request' button.

You will now see a preview of your Pull Request. It will show your commit (or commits if you made multiple changes), and a list of changes that have been made. Press the green button:

![contributing-pr-confirm](../../assets/images/contributing/contributing-pr-confirm.png)

You will now get to this screen: 

![contributing-pr-open](../../assets/images/contributing/contributing-pr-open.png)

You can just press the green button again, no need to add a description. 

You will now be sent to your Pull Request:

![contributing-pr-staging](../../assets/images/contributing/contributing-pr-staging.png)

Give github a minute and you should receive a reply from the bot, which builds a temporary version of the wiki with your changes included, so you can check everything worked correctly.

If you want to make edits you can, it will automatically go on the PR and the bot will update the preview (just give it a min - its comment will show as 'edited').

When you're happy with it, go to [Discord](https://discord.gg/kaetMg8) to tell us about it. We can then 'merge' it - accept your pull request to incorporate your changes into the live version.

It's preferable to make changes one at a time. If you include a bunch of unrelated updates in the same PR, if any end up requiring discussion, the rest of your changes end up waiting too. It is possible to have multiple PRs for multiple changes but it gets more fiddly than this basic guide covers.  

You can find currently open PRs here https://github.com/UKPersonalFinance/wiki/pulls	

##Creating new pages, updating the sidebar, adding images, etc

For more info on this kind of stuff, see the [readme](readme.md). 

