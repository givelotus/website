<template>
  <div class="mobile-nav">
    <div
      :class="{ 'menu-open': open }"
      class="menu"
    >
      <v-list
        dense
        tag="nav"
      >
        <v-list-item
          v-for="(item, index) in navMenu"
          :key="index"
          :href="'#' + item"
          link
          :style="{ animationDuration: index * 0.15 + 's' }"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">
              {{ $t('lotusLanding.header_'+item) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          href="https://explorer.givelotus.org/"
          target="_blank"
          :style="{ animationDuration: navMenu.length * 0.15 + 's' }"
          link
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">
              {{ $t('lotusLanding.header_block_explorer') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-divider class="divider-sidebar" /> -->
        <!-- <v-list-item
          v-for="item in ['login', 'register']"
          :key="item"
          :href="link.lotus[item]"
          :style="{ animationDuration: navMenu.length * 0.15 + 's' }"
          link
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">
              {{ $t('lotusLanding.header_'+item) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './header-style';
</style>

<script>
import navMenu from './menu'
import link from '~/static/text/link'

export default {
  data() {
    return {
      link: link,
      navMenu: navMenu
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
