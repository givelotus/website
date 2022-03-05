<template>
  <div class="news">
    <figure>
      <img :src="img" alt="thumb" />
    </figure>
  </div>
</template>

<style lang="scss" scoped>
@import './cards-style.scss';
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
}
</script>
