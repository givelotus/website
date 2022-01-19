<template>
  <div class="person">
    <v-avatar v-if="avatar" class="avatar">
      <img :src="avatar" :alt="name">
    </v-avatar>
    <span v-else class="dot" />
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
