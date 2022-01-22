<template>
  <fragment>
    <v-navigation-drawer v-if="isMobile" v-model="openDrawer" fixed temporary class="mobile-nav">
      <mobile-menu :open="openDrawer" />
    </v-navigation-drawer>
    <v-app-bar
      v-scroll="handleScroll"
      id="header"
      :class="{ fixed: fixed, 'open-drawer': openDrawer }"
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
                <img style="border-radius: 50%" :src="logo" alt="logo" />
              </nuxt-link>
              <scrollactive v-if="!invert && loaded" tag="span">
                <a :href="'/' + $i18n.locale" class="anchor-link ">
                  <img style="border-radius: 50%" :src="logo" alt="logo" />
                </a>
              </scrollactive>
            </div>
            <div v-if="isDesktop">
              <scrollactive v-if="loaded" :offset="navOffset" active-class="active" tag="ul">
                <li v-for="(item, index) in menuList" :key="index">
                  <v-btn
                    :href="getLocalizedHref(item.url)"
                    :class="{'anchor-link scrollactive-item' : $nuxt.$route.name.includes('index')}"
                    class="menu-link"
                    @click="setOffset(item.offset)"
                  >{{ $t(item.translation) }}</v-btn>
                </li>
                <li>
                  <v-btn
                    href="https://explorer.givelotus.org/"
                    target="_blank"
                    text
                    class="menu-link"
                  >{{ $t('lotusLanding.header_block_explorer') }}</v-btn>
                </li>

                <li>
                  <v-btn
                    href="https://docs.givelotus.org/"
                    target="_blank"
                    text
                    class="menu-link"
                  >{{ $t('lotusLanding.documentation') }}</v-btn>
                </li>

                <li>
                  <v-btn
                    href="https://thepassage.news/"
                    target="_blank"
                    text
                    class="menu-link"
                  >{{ $t('menu.news') }}</v-btn>
                </li>
              </scrollactive>
            </div>

          </nav>
          <nav :class="{ invert: invert }" class="nav-menu">
            <hidden v-if="!invert" point="xsDown">
              <v-btn icon class="social-btn" href="https://twitter.com/givelotus" target="_blank">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>

              <v-btn
                icon
                class="social-btn"
                href="https://www.reddit.com/r/lotusproject/"
                target="_blank"
              >
                <v-icon>mdi-reddit</v-icon>
              </v-btn>
              <v-btn
                icon
                class="social-btn"
                href="https://github.com/LogosFoundation"
                target="_blank"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn icon class="social-btn" href="https://t.me/givelotus" target="_blank">
                <v-icon>telegram</v-icon>
              </v-btn>
            </hidden>
            <setting-menu :invert="invert" />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import Lotus_C_Icon from '~/static/images/lotus/Lotus_C_Icon.png'
import link from '~/static/text/link'
import brand from '~/static/text/brand'
import Hidden from '../Hidden'
import { menuList } from './menu'
import Settings from './Settings'
import MobileMenu from './MobileMenu'

export default {
  components: {
    'setting-menu': Settings,
    Hidden,
    MobileMenu,
  },
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      logo: Lotus_C_Icon,
      link: link,
      loaded: false,
      brand: brand,
      section: 0,
      fixed: false,
      openDrawer: null,
      navOffset: 20,
      menuList,
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > 80) {
        return (this.fixed = true)
      }
      return (this.fixed = false)
    },
    setOffset: function(offset) {
      this.navOffset = offset
    },
    handleToggleOpen: function() {
      this.openDrawer = !this.openDrawer
    },
    getLocalizedHref(url) {
      // refactor using composition API
      let href = ''
      // gb is a default language so /gb/#faq doesnt exist and 404s
      // but we need to include prefix to localized page so there is
      // no unnecessary redirections when /de/ user hits other pages
      // e.g /calculator nuxt u18n redirects to /de/calculator
      // it leads to poor UX
      if (this.$i18n.locale != 'gb') {
        href = '/' + this.$i18n.locale + url
      } else {
        href = '/' + url
      }
      return href
    },
  },
  computed: {
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
  },
}
</script>
