<template>
  <div>
    <div class="main-wrap">
      <div class="container-wrap">
        <section id="home">
          <BannerWithVideo />
        </section>
        <section id="signup">
          <title-subscribe
            :caption="$t('lotusLanding.subscribe.caption')"
            align="center"
            class="use-text-title"
            color="primary"
          />
          <v-container
            class="max-md use-text-subtitle2"
            style="text-align: center"
          >
            {{ $t('lotusLanding.subscribe.text') }}
            <br />
            <div class="mx-auto" style="display: inline-block">
              <script
                type="application/javascript"
                async
                data-uid="34ee838890"
                src="https://unique-composer-4819.ck.page/34ee838890/index.js"
              ></script>
            </div>
          </v-container>
        </section>
        <section id="projects">
          <projects />
          <benefit />
        </section>
        <section id="about">
          <features />
          <story />
        </section>
        <section id="faq">
          <faq />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles';

@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin(6px);
  }
}
.space-bottom-testi {
  @include breakpoints-up(md) {
    margin-bottom: section-margin($spacing1);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 / 2);
}
.space-top {
  margin-top: section-margin($spacing1);
  @include breakpoints-down(sm) {
    margin-top: section-margin(6px);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 / 2);
}
.container-wrap {
  margin-top: -40px;
  > section {
    position: relative;
  }
}
</style>

<script>
import Benefit from '~/components/Benefit'
import BannerWithVideo from '~/components/Banner/BannerWithVideo'
import Features from '~/components/Features'
import Story from '~/components/Story'
import Faq from '~/components/Faq'
import Projects from '~/components/Projects'
import Title from '~/components/Title'

import brand from '~/static/text/brand'

export default {
  layout: 'landing',
  components: {
    BannerWithVideo,
    Benefit,
    Projects,
    Features,
    Story,
    Faq,
    'title-subscribe': Title,
  },
  computed: {
    isTablet() {
      return (
        this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown'
      ) // eslint-disable-line
    },
    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown'
    },
  },
  head() {
    return {
      title: brand.lotus.name + ' - Givelotus',
      meta: [
        { property: 'author', content: 'givelotus.org' },
        {
          name: 'description',
          content: this.$t('lotusLanding.banner_subtitle'),
        },
        {
          property: 'og:description',
          content: this.$t('lotusLanding.banner_subtitle'),
        },
        {
          property: 'og:title',
          content: 'Lotus - ' + this.$t('lotusLanding.banner_titlestrong'),
        },
      ],
    }
  },
}
</script>
