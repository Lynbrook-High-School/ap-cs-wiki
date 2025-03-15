## Issues 

If there are any bugs or requested features that should be added,
please make an issue in the GitHub repository.

## Contributing

First, create a fork of this Github repository. An easy way to do this is to
click the "Fork" button at the top of the repository page.

To edit articles, go to the MDX file (which are in `/data/articles`) and click
the "Edit this file" button. From there, you can make all the changes you need.

To create articles, click the "Add File" button in the articles folder.

With these edits, you can make a Pull Request to get these changes merged.

## Writing Articles

To render the Markdown, you can use an online editor or deploy the site 
on your machine. I personally do the former and use either 
[Markdown Live Preview](https://markdownlivepreview.com/) or the 
[USACO Guide Editor](https://usaco.guide/editor/). The latter supports 
KaTeX (for math notation), but is admittedly a bit less suited for the task.

### Custom React Components

So far, there are only three extra components that are used when writing an article.
For those who don't know React syntax, it generally looks like this:

```
<ComponentName attr1="..." attr2="...">

</ComponentName>
```

### Quiz

This generates a short, interactive MCQ. The syntax is a bit long, but is intuitive
enough. You can find an example
[here](https://raw.githubusercontent.com/Lynbrook-High-School/ap-cs-wiki/refs/heads/master/data/articles/objects/inheritance.mdx)
at the bottom of the page.

Here's [a short program](https://ide.usaco.guide/OE1CCX1YUEuOaREwId0) that might help 
with writing a Quiz. A better way to quickly write quizzes is currently in 
progress.

### Spoiler

This generates a drop-down spoiler. Here's the syntax:

```
<Spoiler title="...">

(your content here)

</Spoiler>
```

The neat part is that any Markdown/JSX content will work fine within the spoiler,
although if there's only code in the spoiler the margins look a bit weird.

### Video

This component is just to make writing easier and to make sure all the videos
look the same. Here's the syntax: 

```
<Video src="...">

</Video>
```

Here, `src` denotes the location of the video within the folder
for videos (which would be `/static/videos`). 

A quirk about videos is that if you deploy locally, the videos will not
render. This is due to how GitHub pages works; because this repo isn't
at the root, video paths have to be prefixed with the repo name, which isn't
the case when running it locally. 

### Frontmatter

```
---
title: page-name
date: 'year-month-day'
tags: ['tag1', 'tag2'...]
draft: true/false
summary: what-this-article-is-about
---
```

The current tag setup requires them to be formatted in a somewhat specific way.
Either mark the tag as `misc`, or `ch num name`. For example, let's say
we have an article for Chapter 24 - Hash Tables. Then, set the tag name to
"Ch 24 Hash Tables". This will get formatted into `ch-24-hash-tables`. 

### Custom Blockquotes

Similar to GitHub Markdown, you can use the following blockquotes:

```
> [!NOTE]
> This is a note!
```

> [!NOTE]
> This is a note!

```
> [!WARNING]
> This is a warning!
```

> [!WARNING]
> This is a warning!

The rest can be found [here](https://github.com/orgs/community/discussions/16925).
