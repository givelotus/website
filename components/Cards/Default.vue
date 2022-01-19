<template>
  <v-card class="default-card">
    <figure class="image-container">
      <img
        :src="img"
        alt="img"
      >
    </figure>
    <div class="text pt-10">
      <h6 class="title">{{ title }}</h6>
      {{ desc }}
    </div>
    <v-btn
      color="secondary"
      class="button"
      :href="url"
      target='_blank'
    >
      {{ button }}
    </v-btn>
  </v-card>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    button: {
      type: String,
      required: true
    }
  }
}
</script>
