<template>
  <div class="root">
    <v-container class="max-md">

      <u-animate-container>
        <u-animate
          name="fadeInRightShort"
          delay="0.4s"
          duration="0.3s"
        >
          <title-main
            caption="We are about"
            align="center"
            class='use-text-title'
            color="primary"
          >
          </title-main>
          <v-row class="spacing8 grid">

            <v-col sm="6" class="px-8">
              <div class="counter-item">
                <figure>
                  <img src="/images/smart_contracts.png" alt="presenter" />
                </figure>
                <div class="text" v-if="loaded">
                  <h4 class="use-text-title">
                    <!-- +<span
                      v-countUp:onWindowScroll.once="{
                        watchedElId: 'watched_counter',
                        startValue: 0,
                        endValue: 200,
                        options: { duration: 1 }
                      }"
                    /> -->
                    Smart contracts
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('lotusLanding.feature_3') }}
                  </h6>
                </div>
              </div>
            </v-col>

            <v-col sm="6" class="px-8">
              <div class="counter-item">
                <figure>
                  <img src="/images/self-funding3.png" alt="money" />
                </figure>
                <div class="text" v-if="loaded">
                  <h4 class="use-text-title">
                    <!-- $<span
                      v-countUp:onWindowScroll.once="{
                        watchedElId: 'watched_counter',
                        startValue: 0,
                        endValue: 500,
                        options: { duration: 2 }
                      }"
                    />
                    -->
                    Self-funding
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('lotusLanding.feature_2') }}
                  </h6>
                </div>
              </div>
            </v-col>
            <v-col sm="6" class="px-8">
              <div class="counter-item">
                <figure>
                  <img src="/images/scalable.png" alt="unlimited" />
                </figure>
                <div class="text" v-if="loaded">
                  <h4 class="use-text-title">Scalability</h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('lotusLanding.feature_1') }}
                  </h6>
                </div>
              </div>
            </v-col>
            <v-col sm="6" class="px-8">
              <div class="counter-item">
                <figure>
                  <img src="/images/stable3.png"  />
                </figure>
                <div class="text" v-if="loaded">
                  <h4 class="use-text-title">
                    <!-- +<span
                      v-countUp:onWindowScroll.once="{
                        watchedElId: 'watched_counter',
                        startValue: 0,
                        endValue: 100,
                        options: { duration: 1 }
                      }"
                    />K -->
                    Stability
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('lotusLanding.feature_4') }}
                  </h6>
                </div>
              </div>
            </v-col>

            <!-- <v-col sm="6" class="px-8">
              <div class="counter-item">
                <figure>
                  <img src="/images/network.png" alt="unlimited" />
                </figure>
                <div class="text" v-if="loaded">
                  <h4 class="use-text-title">Swarmwise</h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('lotusLanding.feature_5') }}
                  </h6>
                </div>
              </div>
            </v-col>
            <v-col sm="6" class="px-8">
              <div class="counter-item">
                <figure>
                  <img src="/images/blockchain.png" alt="unlimited" />
                </figure>
                <div class="text" v-if="loaded">
                  <h4 class="use-text-title">eCash based</h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('lotusLanding.feature_6') }}
                  </h6>
                </div>
              </div>
            </v-col> -->


          </v-row>
        </u-animate>

      </u-animate-container>

    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'features-style.scss';
</style>

<script>
import Title from '../Title'

export default {
  components: {
    'title-main': Title
  },
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
