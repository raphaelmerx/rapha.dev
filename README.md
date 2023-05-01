# rapha.dev blog

forked from https://github.com/GautierArcin/i18n-tailwind-nextjs-starter-blog

## Getting started

```
npm i
npm start
```

## Post

To have localized version for post, please follow this naming convention:

`myPost.md` : default locale

`myPost.[locale].md`: additional locales

Post can be provided in only one locale (that doesn't need to be defaultLocale).

The API routes used in the newsletter component cannot be used in a static site export. You will need to use a form API endpoint provider and substitute the route in the newsletter component accordingly. Other hosting platforms such as Netlify also offer alternative solutions - please refer to their docs for more information.
