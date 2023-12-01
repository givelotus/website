<template>
  <div>
    <div class="main-wrap">
      <div class="container-wrap">
        <section id="home">
          <banner />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/Banner/Banner'
import brand from '~/static/text/brand'

export default {
  components: {
    Banner
  },
  layout: 'landing',
  head() {
    return {
      title: brand.lotus.name + ' - Givelotus',
      meta: [
        { property: 'author', content: 'givelotus.org' },
        {
          name: 'description',
          content: this.$t('lotusLanding.banner_subtitle')
        },
        {
          property: 'og:description',
          content: this.$t('lotusLanding.banner_subtitle')
        },
        {
          property: 'og:title',
          content: 'Lotus - ' + this.$t('lotusLanding.banner_title')
        }
      ]
    }
  },
  computed: {
    isTablet() {
      return (
        this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown'
      ) // eslint-disable-line
    },
    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown'
    }
  }
}
</script>

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
