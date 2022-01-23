import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E24F55'
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    title: "Lotus",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: "Home of Lotus Documentation" },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      // PWA primary color
      { name: 'theme-color', content: "#A7008F" },
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
      { property: 'twitter:image:src', content: 'icon.png' },
      { property: 'og:url', content: 'givelotus.org' },
      { property: 'og:title', content: "Lotus - The Token of Appreciation" },
      { property: 'og:description', content: "Home of Lotus Documentation" },
      { name: 'twitter:site', content: "givelotus.org" },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'icon.png' },
      { property: 'og:image', content: 'icon.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ],
  }
})
