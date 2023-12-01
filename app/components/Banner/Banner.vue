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
            <v-btn
              href="https://t.me/givelotus/1"
              target="_blank"
              rel="noopener"
            >
              <strong>{{ $t('lotusLanding.banner_title') }}</strong>
            </v-btn>
          </h3>
        </div>
      </div>
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
  components: { Hidden },
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
