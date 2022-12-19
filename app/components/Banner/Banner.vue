<template>
  <div class="root">
    <div class="decoration">
      <svg class="left-deco">
        <use xlink:href="/images/lotus/deco-bg-left.svg#main" />
      </svg>
      <svg class="right-deco">
        <use xlink:href="/images/lotus/deco-bg-right.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <div class="container">
        <div class="item text-center white--text">
          <h3 class="use-text-title">
            {{ $t('lotusLanding.banner_title') }}
            <strong>{{ $t('lotusLanding.banner_title') }}</strong>
          </h3>
          <p class="use-text-subtitle">
            {{ $t('lotusLanding.banner_subtitle') }}
          </p>
        </div>
      </div>
      <div class="thewhy">
        <p class="text white--text" v-html="$t('banner.why_1')" />
        <p class="text white--text" v-html="$t('banner.why_2')" />
        <p class="text white--text" v-html="$t('banner.why_3')" />
        <p class="text white--text" v-html="$t('banner.why_4')" />
      </div>
    </v-container>
    <v-container class="max-md use-text-subtitle2 white--text text-center">
      {{ $t('lotusLanding.subscribe.text') }}
      <br /><br />
      <v-btn
        rounded
        outlined
        x-large
        href="https://blog.givelotus.org"
        target="_blank"
        class="text-bold white--text"
      >
        {{ $t('lotusLanding.subscribe.caption') }}
      </v-btn>
    </v-container>
    <div class="deco">
      <hidden point="mdDown">
        <div class="deco-inner">
          <div class="wave wave-one" />
          <div class="wave wave-two" />
        </div>
      </hidden>
      <div class="wave wave-cover" />
    </div>
  </div>
</template>

<script>
import Hidden from '../Hidden'

export default {
  components: {
    Hidden
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>
