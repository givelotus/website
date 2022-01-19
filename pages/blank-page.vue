<template>
  <div>
    <section id="home" />
    <div class="main-wrap">
      <main-header invert />
      <div class="container-wrap">
        <section class="space-top space-bottom">
          <h2 class="display-3 text-center mb-4">
            {{ $t('common.title') }}
          </h2>
          <h4 class="display-1 text-center">
            {{ $t('common.subtitle') }}
          </h4>
        </section>
      </div>
      <section class="spaceTop">
        <main-footer invert />
      </section>
      <notification />
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
}
.space-top {
  margin-top: section-margin($spacing1);
}
.container-wrap {
  margin-top: $spacing10;
  padding: $spacing4;
  > section {
    position: relative;
  }
}
</style>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    Notification,
    'main-footer': Footer
  },
  head() {
    return {
      title: brand.lotus.name + ' - Blank Page'
    }
  }
}
</script>
