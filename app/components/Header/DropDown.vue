<template>
  <div id="app">
    <ul class="header__navbar">
      <li class="header__item">
        <a  class="header__link">
          <transition name="slide-fade">
            <v-btn
              key="off"
              @mouseover="show = true"
              text
              class="menu-link"
              > {{ $t('menu.more') }}</v-btn>
          </transition>
        </a>

        <transition name="dropdown">
          <div class="header__dropdown-menu" :class="{ active: show }" v-if="show">
            <ul class="header__dropdown-menu-nav">
              <li class="header__dropdown-menu-item">
                <a :href="getLocalizedHref('/wallets')" class="header__dropdown-menu-link" title="Available wallets">
                  <div class="header__dropdown-menu-svg">
                    <v-icon color="grey darken-2"> account_balance_wallet</v-icon>
                  </div>
                  <div class="header__dropdown-menu-text">
                    {{ $t('menu.wallets') }}
                  </div>
                </a>
              </li>
              <li class="header__dropdown-menu-item">
                <a href="https://explorer.givelotus.org/" target="_blank" class="header__dropdown-menu-link" title="Block Explorer">
                  <div class="header__dropdown-menu-svg">
                    <v-icon color="grey darken-2"> grid_view</v-icon>
                  </div>
                  <div class="header__dropdown-menu-text">
                    {{ $t('lotusLanding.header_block_explorer') }}
                  </div>
                </a>
              </li>
              <li class="header__dropdown-menu-item">
                <a href="https://docs.givelotus.org/" target="_blank" class="header__dropdown-menu-link" title="documentation">
                  <div class="header__dropdown-menu-svg">
                    <v-icon color="grey darken-2">article</v-icon>
                  </div>
                  <div class="header__dropdown-menu-text">
                    {{ $t('lotusLanding.documentation') }}
                  </div>
                </a>
              </li>
              <li class="header__dropdown-menu-item">
                <a :href="getLocalizedHref('/credits')" class="header__dropdown-menu-link" title="contributors">
                  <div class="header__dropdown-menu-svg">
                    <v-icon color="grey darken-2">groups</v-icon>
                  </div>
                  <div class="header__dropdown-menu-text">
                     {{ $t('lotusLanding.contributors') }}
                  </div>
                </a>
              </li>
              <li class="header__dropdown-menu-item">
                <a :href="getLocalizedHref('/calculator')" class="header__dropdown-menu-link" title="rewards calculator">
                  <div class="header__dropdown-menu-svg">
                    <v-icon color="grey darken-2">calculate</v-icon>
                  </div>
                  <div class="header__dropdown-menu-text">
                    {{ $t('menu.calculator') }}
                  </div>
                </a>
              </li>

            </ul>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import './dropdown.scss';
@import './header-style.scss';
</style>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
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
        href = '' + url
      }
      return href
    },
  },
  created() {
    window.addEventListener('click', e => {
      if (!this.$el.contains(e.target)) {
        this.show = false
      }
    })
  },
}
</script>
