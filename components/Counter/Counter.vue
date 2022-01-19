<template>
  <div class="counter-wrap">
    <v-container>
      <v-row
        justify="center"
        align="center"
        class="counter-inner spacing6"
      >
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                <span
                  v-if="loaded"
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 5,
                    options: { duration: 1 }
                  }"
                />
                {{ $t('lotusLanding.counter_month') }}
              </h3>
              <p class="use-text-subtitle">
                <v-icon>mdi-reply</v-icon>
                {{ $t('lotusLanding.counter_free') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                <span
                  v-if="loaded"
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 400,
                    options: { duration: 1 }
                  }"
                />
              </h3>
              <p class="use-text-subtitle">
                <v-icon>mdi-account-multiple</v-icon>
                {{ $t('lotusLanding.counter_users') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                <span
                  v-if="loaded"
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 115,
                    options: { duration: 1 }
                  }"
                />K
              </h3>
              <p class="use-text-subtitle">
                <v-icon>mdi-layers</v-icon>
                {{ $t('lotusLanding.counter_providers') }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
