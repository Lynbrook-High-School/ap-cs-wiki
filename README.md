## Issues 

If there are any bugs or requested features that should be added,
please make an issue in the GitHub repository.

## Contributing

Writing articles is pretty simple. For the most part, it's just Markdown 
with MDX components.

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

Here's the stuff that isn't in Markdown:

### Custom Blockquotes

Similar to GitHub Markdown, you can use the following blockquotes:

```
> [!NOTE]
> ....
```

> [!NOTE]
> ....

```
> [!WARNING]
> ....
```

> [!WARNING]
> ....

The rest can be found [here](https://github.com/orgs/community/discussions/16925).

### Custom React Components

So far, there are only three extra components that are used when writing an article:
- `Quiz.tsx`, `Spoiler.tsx`, and `Video.tsx`

For now, just refer to the `Objects/Classes` and `Inheritance` articles for 
how to use them. If the syntax is confusing, just show ChatGPT the example and
ask it to write it in that format.

Here's [a short program](https://ide.usaco.guide/OE1CCX1YUEuOaREwId0) that might help 
with writing a Quiz.