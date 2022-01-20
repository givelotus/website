# GiveLotus.org made with Vue, NuxtJS and Vuetify

Current pipeline: https://decisive-indigo-970.notion.site/842de46bfec648d698419480e6aa9d18?v=cb4e833f98f24383ba481d14a871114e


Features:

- seo optimized (100% at google lighthouse)
- dark mode
- internationalization with nuxt-i18n
- SSR, SPA and UWA modes (https://recurse.me/posts/choosing-a-nuxt-mode.html)
- responsive for mobile / desktop / tablet viewports

## Installation (tested on node >14)

```
yarn
```

## Run Development

```
yarn dev
```

## Run Development with Docker

You should avoid developing with Docker as it is
mostly required for production build and it significantly
increases the feedback loop for making changes and seeing them.
(you need to rebuild the container each time after you make a change)


1. Build container

```
sudo docker build . -t lotus-nuxt
```

2. Run container

```
sudo docker run -it -p 8080:8080 lotus-nuxt:latest
```

This mode auto redirects to https. Requires SSL certicate to work.

You should disable https redirect in your browser to make it reachable.
https://www.itadminguide.com/disable-https-redirect-in-firefox/

You will then be able to visit the app at localhost:8080


## Build for CDN (SSR)

```
yarn generate
```

##  SPA/UWA

In nuxt.config.js add line:

```
mode: "universal"
```

or

```
mode: "spa"
```

and remove:

```
target: 'static',
```

then

```
yarn start
```

Credits:

built with amazing awrora-starter https://github.com/ilhammeidi/awrora-starter
