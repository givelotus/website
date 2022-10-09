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
            <strong>{{ $t('lotusLanding.banner_titlestrong') }}</strong>
          </h3>
          <p class="use-text-subtitle">
            {{ $t('lotusLanding.banner_subtitle') }}
          </p>
        </div>
      </div>
      <div class="thewhy">
        <p class="text white--text">
          Society struggles with efficiently funding public goods projects —
          with allocating resources towards work that is desparately needed but
          has no direct profit incentive. To this end, Lotus was created. We
          belive that by re-framing what money is, and challenging the ideas
          around how it is used, we can solve the problem of funding public
          goods.
        </p>
        <p class="text white--text">
          Our goal is to show volunteers of charitable projects appreciation by
          distributing Lotus to them free-of-charge. And, as a culture, being
          willing to accept those tokens in return for things these volunteers
          need.
        </p>
        <p class="text white--text">
          Our initial focus is on open source projects, and specifically the
          projects needed to make Lotus function and exist. However, we are
          looking for additional charitable projects who are willing to accept
          and use Lotus. We would love to speak to any volunteer-based projects
          that are interesting in participating. We have a particular interest
          in providing tokens to open source, schools, orphanages, doctors, and
          other public utilities.
        </p>
        <p class="text white--text">
          If you are run such a project, and are interested in using Lotus,
          please apply to receive tokens through our
          <a
            class="white--text"
            href="https://forms.gle/j9EeY5NN57RcAoY99"
            target="_blank"
            >form</a
          >, or on our
          <a
            class="white--text"
            href="https://discord.gg/KECbh3JEmm"
            target="_blank"
            >discord.</a
          >
        </p>
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

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import Hidden from '../Hidden'

export default {
  components: {
    Hidden,
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
  },
}
</script>
