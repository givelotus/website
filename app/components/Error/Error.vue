<template>
  <div class="error-wrap">
    <v-container class="max-lg">
      <v-row>
        <v-col cols="12" sm="5">
          <div class="flex">
            <div class="deco">
              <h3>
                {{ errCode }}
              </h3>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="7">
          <div class="text">
            <h4 class="display-1">{{ text }}</h4>
            <p>
              {{ $t('common.404_subtitle') }}
            </p>
            <v-btn
              color="secondary"
              href="/"
              large
              class="button"
            >
              {{ $t('common.back') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './error-style.scss';
</style>

<script>
export default {
  props: {
    errCode: {
      type: String,
      default: '404'
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
