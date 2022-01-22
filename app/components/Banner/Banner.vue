<template>
  <div class="root">
    <v-container :class="{ fixed: isDesktop }">
      <div class="container">
        <div class="item text-center white--text">

          <h3 class="use-text-title">
            {{ title }}
          </h3>
          <p class="use-text-subtitle"> {{ subtitle }}</p>

        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
export default {
  // components: {
  // },
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
  },
}
</script>
