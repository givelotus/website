<template>
  <v-card class="d-flex flex-column" height="450px">
    <v-img :src="img" alt="img" contain height="170px" />
    <v-card-title class="mb-none">
      {{ title }}
    </v-card-title>
    <v-list-item class="align-start">
      {{ desc }}
    </v-list-item>
    <v-card-actions class="mt-auto text-top">
      <v-btn color="secondary" class="button" :href="url" target="_blank">
        {{ button }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
.button {
  width: 50%;
  @include margin-left(50%);
  height: 43px;
  line-height: 44px;
  position: absolute;
  right: 0;
  bottom: 0;
  @include shadow10;
  [dir='ltr'] & {
    border-radius: 20px 0 0 0;
  }
  [dir='rtl'] & {
    border-radius: 0 20px 0 0;
  }
}
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    button: {
      type: String,
      required: true,
    },
  },
}
</script>
