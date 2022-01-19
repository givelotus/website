<template>
  <div
    class="main-title"
    :class="[align, { dark: dark }]"
  >
    <p class="caption-title" :class="[captionClass]">
      {{ caption }}
    </p>
    <h4 :class="[textClass]">
      {{ text }}
    </h4>
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
      required: false
    },
    caption: {
      type: String,
      required: false
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
