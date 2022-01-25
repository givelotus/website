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
            :caption="$t('lotusLanding.features.title')"
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
                     {{ $t('lotusLanding.features.feature1.title') }}
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('lotusLanding.features.feature1.description') }}
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
                     {{ $t('lotusLanding.features.feature2.title') }}
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('lotusLanding.features.feature2.description') }}
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
                  <h4 class="use-text-title">{{ $t('lotusLanding.features.feature3.title') }}</h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('lotusLanding.features.feature3.description') }}
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
                    {{ $t('lotusLanding.features.feature4.title') }}
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('lotusLanding.features.feature4.description') }}
                  </h6>
                </div>
              </div>
            </v-col>
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
    'title-main': Title,
  },
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true
  },
}
</script>
