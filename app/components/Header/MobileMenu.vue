<template>
  <div class="mobile-nav">
    <div :class="{ 'menu-open': open }" class="menu">
      <v-list dense tag="nav">
        <v-list-item
          v-for="(item, index) in navMenu"
          :key="index"
          :href="getLocalizedHref(item.url)"
          link
          :style="{ animationDuration: index * 0.15 + 's' }"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">{{
              $t(item.translation)
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :href="getLocalizedHref('/wallets', true)" link>
          <v-list-item-content>
            <v-list-item-title class="menu-list">{{
              $t('menu.wallets')
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :href="getLocalizedHref('/credits', true)" link>
          <v-list-item-content>
            <v-list-item-title class="menu-list">{{
              $t('lotusLanding.contributors')
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          href="https://explorer.givelotus.org/"
          target="_blank"
          :style="{ animationDuration: navMenu.length * 0.15 + 's' }"
          link
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">{{
              $t('lotusLanding.header_block_explorer')
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          href="https://docs.givelotus.org/"
          target="_blank"
          :style="{ animationDuration: navMenu.length * 0.15 + 's' }"
          link
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">{{
              $t('lotusLanding.documentation')
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          href="https://blog.givelotus.org/"
          target="_blank"
          :style="{ animationDuration: navMenu.length * 0.15 + 's' }"
          link
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">{{
              $t('menu.news')
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item-group
          class="fixedBottom"
          :style="{ animationDuration: navMenu.length * 0.15 + 's' }"
        >
          <v-btn
            x-large
            icon
            class="social-btn"
            href="https://twitter.com/givelotus"
            target="_blank"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>

          <v-btn
            x-large
            icon
            class="social-btn"
            href="https://www.reddit.com/r/lotusproject/"
            target="_blank"
          >
            <v-icon>mdi-reddit</v-icon>
          </v-btn>

          <v-btn
            x-large
            icon
            class="social-btn"
            href="https://github.com/LogosFoundation"
            target="_blank"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>

          <v-btn
            x-large
            icon
            class="social-btn"
            href="https://t.me/givelotus"
            target="_blank"
          >
            <v-icon>telegram</v-icon>
          </v-btn>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './header-style';
.fixedBottom {
  position: fixed !important;
  bottom: 15px !important;
  width: 100%;
}
</style>

<script>
import { menuList } from './menu'
import link from '~/static/text/link'

export default {
  data() {
    return {
      link: link,
      navMenu: menuList
    }
  },
  methods: {
    getLocalizedHref(url, root) {
      let href = ''
      // gb is a default language so /gb/#faq doesnt exist and 404s
      // but we need to include prefix to localized page so there is
      // no unnecessary redirections when /de/ user hits other pages
      // e.g /calculator nuxt u18n redirects to /de/calculator
      // it leads to poor UX
      if (this.$i18n.locale != 'gb') {
        href = '/' + this.$i18n.locale + url
      } else {
        if (root) {
          href = '' + url
        } else {
          href = '/' + url
        }
      }
      return href
    }
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>
