<template>
  <v-card class="default-card">
    <template v-slot:default="{ item }">
      <div>
        <div class="image-container">
          <img :src="image" />
        </div>

        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <v-btn
          color="secondary"
          class="button"
          :href="url"
          target='_blank'
        >
          Click me
        </v-btn>
      </div>
    </template>
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
    content: {
      type: String,
      required: true
    },
    image: {
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
