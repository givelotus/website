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
          <nuxt />
        </v-main>
      </div>
    </transition>
  </v-app>
</template>

<script>
export default {
  loading: false,
  data() {
    return {
      show: false,
      play: false
    }
  },
  mounted: function() {
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
