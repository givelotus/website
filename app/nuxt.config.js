import FilterWarningsPlugin from 'webpack-filter-warnings-plugin'
import nodeExternals from 'webpack-node-externals'
import { theme } from './config/vuetify.options'
import languages from './static/lang/languages'
import brand from './static/text/brand'

module.exports = {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      dir: 'ltr',
    },
    title: brand.lotus.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: brand.lotus.desc },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/ms-icon-144x144.png',
      },
      // PWA primary color
      { name: 'theme-color', content: theme.primary },
      // Facebook
      { property: 'author', content: 'Lotus - The Token of Appreciation' },
      { property: 'og:site_name', content: 'GiveLotus' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      // Twitter
      { property: 'twitter:site', content: 'givelotus.org' },
      { property: 'twitter:domain', content: 'givelotus.org' },
      { property: 'twitter:creator', content: 'lotus' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:image:src', content: brand.lotus.img },
      { property: 'og:url', content: brand.lotus.url },
      { property: 'og:title', content: brand.lotus.projectName },
      { property: 'og:description', content: brand.lotus.desc },
      { name: 'twitter:site', content: brand.lotus.url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: brand.lotus.img },
      { property: 'og:image', content: brand.lotus.img },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    ],
    link: [
      // Favicon
      { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicons/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicons/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicons/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicons/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicons/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicons/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicons/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicons/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicons/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicons/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicons/manifest.json' },
      // Fonts and Icons
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
      {
        rel: 'stylesheet',
        href:
          'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: theme.primary },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/transition.scss',
    '~/assets/vuetify-overide.scss',
    '~/assets/vendors/animate.css',
    '~/assets/vendors/animate-extends.css',
    '~/assets/vendors/hamburger-menu.css',
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/slick-carousel/slick-theme.css',
    '~/assets/global.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-fragment-config',
    '~/plugins/vue-wow-config',
    { src: '~plugins/i18n-config.js' },
    { src: '~/plugins/caroussel-config', ssr: false },
    { src: '~/plugins/countup-config', ssr: false },
    { src: '~/plugins/vue-scroll-nav', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/html-minifier', { log: 'once', logHtml: true }],
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          xsDown: 599,
          xsUp: 600,
          smDown: 959,
          smUp: 960,
          mdDown: 1279,
          mdUp: 1280,
          lgDown: 1919,
          lgUp: 1920,
          xl: Infinity,
        },
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        // Options
        //to make it seo friendly remove below line and add baseUrl option to production domain
        seo: true,
        baseUrl: 'https://givelotus.org',
        lazy: true,
        locales: languages,
        defaultLocale: 'gb',
        vueI18n: {
          fallbackLocale: 'gb',
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true,
        },
        langDir: 'static/lang/',
      },
    ],
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    optionsPath: './config/vuetify.options.js',
  },
  /*
  ** Render configuration
  */
  render: {
    bundleRenderer: {
      directives: {
        shouldPreload: (file, type) => {
          return ['script', 'style', 'font'].includes(type)
        },
      },
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // cssSourceMap: false,
    loaders: {
      vus: { cacheBusting: true },
      scss: { sourceMap: false },
    },
    extend (config, ctx) {
      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /Critical dependency: the request of a dependency is an expression/,
        }),
      )
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-webpack-plugin',
          exclude: /([node_modules, static])/,
          options: {
            fix: false,
          },
        })
      }
    },
  },
  /*
  ** Page Layout transition
  */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...')
    },
    afterLeave (el) {
      console.log('afterLeave', el)
    },
  },
  /*
  ** Application Port
  */
  server: {
    port: 8008, // default: 3000
  },
}
