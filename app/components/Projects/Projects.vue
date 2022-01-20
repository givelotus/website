<template>
  <div class="root">
    <div class="decoration">
      <svg class="wave">
        <use xlink:href="/images/lotus/deco-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <title-main align="center">
          <span>
            {{ $t('lotusLanding.feature_title3') }}
            <br />
            <br />
            <strong>
              {{ $t('lotusLanding.feature_titlestrong3') }}
            </strong>
          </span>
        </title-main>
        <div class="tab">
          <v-row class="spacing6">
            <v-col
              v-if="!isMobile"
              class="pa-6"
              md="1"
              cols="12"
            />
            <v-col md="10" cols="12" class="pa-6">
              <v-tabs
                v-model="tab"
                class="tabs"
                color="primary"
                centered
              >
                <v-tabs-slider color="primary" />
                <v-tab class="tab-label" href="#tab-1">Logos Foundation</v-tab>
                <v-tab class="tab-label" href="#tab-3">StampChat</v-tab>
                <v-tab class="tab-label" href="#tab-4">Be.Cash</v-tab>
                <v-tab class="tab-label" href="#tab-5">Bitcoin ABC</v-tab>
                <v-tab-item value="tab-1">
                  <div class="tab-content">
                    <section>
                      <h6 class="text-center use-text-subtitle2">
                        {{ $t('lotusLanding.logos_desc') }}
                      </h6>
                      <div class="illustration-center">
                        <figure class="figure screen">
                          <img :src="imgAPI.lotus[4]" alt="screen" />
                        </figure>
                      </div>
                    </section>
                  </div>
                </v-tab-item>
                <v-tab-item value="tab-3">
                  <div class="tab-content">
                    <section>
                      <h6 class="text-center use-text-subtitle2">
                        {{ $t('lotusLanding.stampchat_desc') }}
                      </h6>
                      <div class="illustration-center">
                        <figure class="figure screen">
                          <img :src="imgAPI.projects[0]" alt="screen" />
                        </figure>
                      </div>
                    </section>
                  </div>
                </v-tab-item>
                <v-tab-item value="tab-4">
                  <div class="tab-content">
                    <section>
                      <h6 class="text-center use-text-subtitle2">
                        {{ $t('lotusLanding.becash_desc') }}
                      </h6>
                      <div class="illustration-center">
                        <figure class="figure screen">
                          <img :src="imgAPI.projects[1]" alt="screen" />
                        </figure>
                      </div>
                    </section>
                  </div>
                </v-tab-item>
                <v-tab-item value="tab-5">
                  <div class="tab-content">
                    <section>
                      <h6 class="text-center use-text-subtitle2">
                        {{ $t('lotusLanding.bitcoin_abc_desc') }}
                      </h6>
                      <div class="illustration-center">
                        <figure class="figure screen">
                          <img :src="imgAPI.projects[2]" alt="screen" />
                        </figure>
                      </div>
                    </section>
                  </div>
                </v-tab-item>
              </v-tabs>
              <parallax-large />
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './projects-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'
import imgAPI from '~/static/images/imgAPI'
import ParallaxMedium from '../Parallax/Medium'
import ParallaxLarge from '../Parallax/Large'
import Title from '../Title'

export default {
  components: {
    Parallax,
    ParallaxMedium,
    ParallaxLarge,
    'title-main': Title
  },
  data() {
    return {
      tab: null,
      imgAPI: imgAPI,
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
