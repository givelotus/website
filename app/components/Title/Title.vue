<template>
  <div class="main-title" :class="[align, { dark: dark }]">
    <p class="caption-title" :class="[captionClass]" v-if="caption">
      {{ caption }}
    </p>
    <h4 :class="[textClass]" v-if="text">{{ text }}</h4>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style.scss';
</style>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left'
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    caption: {
      type: String,
      required: false,
      default: ''
    },
    captionClass: {
      type: String,
      default: ''
    },
    textClass: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
