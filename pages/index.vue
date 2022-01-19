<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <section id="home">
          <banner />
        </section>

        <section id="about" :class="isMobile ? 'space-top-short' : 'space-top'">
          <features />
          <story />
        </section>

        <section id="carousel" :class="isMobile ? 'space-top-short' : 'space-top'">
          <Carousel />
          <benefit />

        </section>
        <br>

        <section id="faq" class="space-top-short">
          <faq />
        </section>
        <!-- <developersMap /> -->

      </div>
      <section id="footer">
        <footer-with-deco />
      </section>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <!-- <hidden point="mdDown">
        <notification />
      </hidden> -->
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
import Header from '~/components/Header'
import Benefit from '~/components/Benefit'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
import Banner from '~/components/Banner'
import Counter from '~/components/Counter'
import Features from '~/components/Features'
import Story from '~/components/Story'
import Projects from '~/components/Projects'
import DevelopersMap from '~/components/DevelopersMap'
import Faq from '~/components/Faq'
import FooterWithDeco from '~/components/Footer/FooterWithDeco'
import Notification from '~/components/Notification'
import Carousel from '~/components/Carousel'

import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    Banner,
    Benefit,
    DevelopersMap,
    Carousel,
    Counter,
    Features,
    Story,
    Projects,
    Faq,
    FooterWithDeco,
    PageNav,
    Hidden,
    Notification
  },
  computed: {
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown' // eslint-disable-line
    },
    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown'
    }
  },
  head() {
    return {
      title: brand.lotus.name + ' - Home Page'
    }
  }
}
</script>
