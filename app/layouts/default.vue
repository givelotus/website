<template>
  <v-app>
    <transition name="fade">
      <div
        id="main-wrap"
        :class="{
          'page-fadeUp-transition-enter': !show,
          'page-fadeUp-transition-enter-active': show && play,
          'page-fadeUp-transition-exit': !play,
          'transition-enter-done': show
        }"
      >
        <v-main>
          <main-header />
          <div class="text-center white--text root">
            <nuxt />
          </div>
          <footer-with-deco />
        </v-main>
      </div>
    </transition>
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import FooterWithDeco from '~/components/Footer/FooterWithDeco'

export default {
  components: {
    'main-header': Header,
    FooterWithDeco
  },
  loading: false,
  data() {
    return {
      show: false,
      play: false
    }
  },
  mounted: function () {
    // Preloader and Progress bar setup
    this.show = true
    this.play = true
    this.$nextTick(() => {
      setTimeout(() => {
        this.$nuxt.$loading.finish()
        this.play = false
      }, 500)
      this.$nuxt.$loading.start()
    })
    const preloader = document.getElementById('preloader')
    if (preloader !== null || undefined) {
      preloader.remove()
    }
    // RTL initial
    const rtlURL = document.location.pathname.split('/')[1] === 'ar'
    this.$vuetify.rtl = rtlURL
  }
}
</script>

<style scoped lang="scss">
.root {
  background: linear-gradient(
    -45deg,
    $palette-primary-main 20%,
    $palette-primary-dark 70%
  );
  position: relative;
}
</style>
