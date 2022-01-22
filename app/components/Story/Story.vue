<template>
  <div class="root">
    <more-feature />
  </div>
</template>

<style lang="scss" scoped>
@import './story-style.scss';
</style>

<script>
import MainFeature from './MainFeature'
import MoreFeature from './MoreFeature'

export default {
  components: {
    MainFeature,
    MoreFeature,
  }
}
</script>
