---
title: Balinese spell checker
date: '2022-01-10'
tags: ['language-tech', 'side-project']
draft: false
summary: 'A webapp to fix Balinese text spelling, built in partnership with the WikiPustaka (Balinese Wikisource) community. Can also guess where to put spaces in text transliterated from the Balinese alphabet to the Latin alphabet. '
type: NewProject
link: https://balinese-spell.netlify.app/
---

# Nested Routes

The blog template supports posts in nested sub-folders. This helps in organisation and can be used to group posts of similar content e.g. a multi-part series. This post is itself an example of a nested route! It's located in the `/data/blog/nested-route` folder.

## How

Simplify create multiple folders inside the main `/data/blog` folder and add your `.md`/`.mdx` files to them. You can even create something like `/data/blog/nested-route/deeply-nested-route/my-post.md`

We use Next.js catch all routes to handle the routing and path creations.

## Use Cases

Here's some reasons to use nested routes

- More logical content organisation (blogs will still be displayed based on the created date)
- Multi-part posts
- Different sub-routes for each author
- Internationalization (though it would be recommended to use [Next.js built in i8n routing](https://nextjs.org/docs/advanced-features/i18n-routing))

## Note

- The previous/next post links at bottom of the template is currently sorted by date. One could explore modifying the template to refer the reader to the previous/next post in the series, rather than by date.
