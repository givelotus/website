<template>
  <fragment>
    <v-navigation-drawer
      v-if="isMobile"
      v-model="openDrawer"
      fixed
      temporary
      class="mobile-nav"
    >
      <mobile-menu :open="openDrawer" />
    </v-navigation-drawer>
    <v-app-bar
      id="header"
      v-scroll="handleScroll"
      :class="{ 'fixed': fixed, 'open-drawer': openDrawer }"
      class="header"
      fixed
      app
    >
      <v-container :class="{ 'fixed-width': isDesktop }">
        <div class="header-content">
          <nav :class="{ invert: invert }" class="nav-logo nav-menu">
            <v-btn
              v-if="isMobile"
              :class="{ 'is-active': openDrawer }"
              class="hamburger hamburger--spin mobile-menu"
              text
              icon
              @click.stop="handleToggleOpen"
            >
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
            <div class="logo">
              <nuxt-link v-if="invert" :to="link.lotus.home">
                <img style="border-radius: 50%" :src="logo" alt="logo" >
              </nuxt-link>
              <scrollactive v-if="!invert && loaded" tag="span">
                <a :href="getLocalizedHome()" class="anchor-link">
                  <img style="border-radius: 50%" :src="logo" alt="logo" >
                </a>
              </scrollactive>
            </div>
            <div v-if="isDesktop">
              <scrollactive
                v-if="loaded"
                :offset="navOffset"
                active-class="active"
                tag="ul"
              >
                <li>
                  <v-btn
                    href="https://explorer.givelotus.org"
                    text
                    class="menu-link"
                  >
                    {{ $t('lotusLanding.header_block_explorer') }}
                  </v-btn>
                </li>
                <li>
                  <v-btn
                    :href="getLocalizedHref('wallets')"
                    target="_blank"
                    text
                    class="menu-link"
                  >
                    {{ $t('menu.wallets') }}
                  </v-btn>
                </li>
                <li>
                  <v-btn
                    href="https://docs.givelotus.org/"
                    target="_blank"
                    text
                    class="menu-link"
                  >
                    {{ $t('lotusLanding.documentation') }}
                  </v-btn>
                </li>
              </scrollactive>
            </div>
          </nav>
          <nav :class="{ invert: invert }" class="nav-menu">
            <hidden v-if="!invert" point="xsDown">
              <v-btn
                icon
                class="social-btn"
                href="https://github.com/givelotus"
                target="_blank"
              >
                <v-icon v-if="$vuetify.theme.dark" color="white">
                  mdi-github
                </v-icon>
                <v-icon v-else>mdi-github</v-icon>
              </v-btn>
              <v-btn
                icon
                class="social-btn"
                href="https://t.me/givelotus"
                target="_blank"
              >
                <v-icon v-if="$vuetify.theme.dark" color="white">
                  telegram
                </v-icon>
                <v-icon v-else>telegram</v-icon>
              </v-btn>
            </hidden>
            <setting-menu :invert="invert" />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
  </fragment>
</template>

<script>
import Hidden from '../Hidden'
import Settings from './Settings'
import MobileMenu from './MobileMenu'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
import LotusCIcon from '~/static/images/lotus/Lotus_C_Icon.png'

export default {
  components: {
    'setting-menu': Settings,
    Hidden,
    MobileMenu
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo: LotusCIcon,
      link,
      loaded: false,
      brand,
      section: 0,
      fixed: false,
      openDrawer: null,
      navOffset: 20,
      showMenu: false
    }
  },
  computed: {
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.includes(this.$mq)
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleScroll: function () {
      if (window.scrollY > 80) {
        return (this.fixed = true)
      }
      return (this.fixed = false)
    },
    setOffset: function (offset) {
      this.navOffset = offset
    },
    handleToggleOpen: function () {
      this.openDrawer = !this.openDrawer
    },
    getLocalizedHome() {
      let href = ''
      if (this.$i18n.locale != 'gb') {
        href = '/' + this.$i18n.locale
      } else {
        href = '/'
      }
      return href
    },
    getLocalizedHref(url, root) {
      let href = ''
      // gb is a default language so /gb/#faq doesnt exist and 404s
      // but we need to include prefix to localized page so there is
      // no unnecessary redirections when /de/ user hits other pages
      // e.g /calculator nuxt u18n redirects to /de/calculator
      // it leads to poor UX
      if (this.$i18n.locale !== 'gb') {
        href = '/' + this.$i18n.locale + url
      } else if (root) {
        href = '' + url
      } else {
        href = '/' + url
      }
      return href
    }
  }
}
</script>

<style lang="scss" scoped>
@import './header-style.scss';
</style>
