<template>
  <div class="more-feature pt-16">
    <div class="chart-deco" />
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <u-animate-container>
          <v-row
            :class="[isMobile ? 'column-reverse' : 'row']"
            class="spacing6"
          >
            <v-col md="6" cols="12" class="pa-6">
              <figure class="illustration">
                <img src="/images/heartmsg.gif" alt="feature" />
              </figure>
            </v-col>
            <v-col md="6" cols="12" class="pa-6">
              <div class="text">
                <u-animate
                  name="fadeInLeftShort"
                  delay="0.4s"
                  duration="0.3s"
                >
                  <div>
                    <main-title
                      textClass='text-h4 pb-12'
                      captionClass='purple--text text-h5'
                      :caption="$t('lotusLanding.morefeature_headtitle1')"
                      :text="$t('lotusLanding.morefeature_title1')"
                      :align="isMobile ? 'center' : 'left'"
                    />
                    <div :class="{ 'text-center': isMobile }">
                      <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-left'">
                        <!-- {{ $t('lotusLanding.morefeature_desc1') }} -->
                        Every day, in our interactions with other people we have experiences that make life worth living. We say, “thank you” to each other. But, talk is cheap and words are fleeting. It’s easy for someone to express appreciation through words alone. How motivating is “thank you?” What if we could seamlessly back our words with something priceless? What would the world look like if we had a more effective way to express gratitude to each other? What if we could keep the “appreciation,” we receive, forever?                       </p>
                      <!-- <v-btn color="primary">
                        {{ $t('lotusLanding.learnmore') }}
                      </v-btn> -->
                    </div>
                  </div>
                </u-animate>
              </div>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
      <v-divider class="divider" />
      <div class="item">
        <u-animate-container>
          <v-row class="spacing6">
            <v-col md="6" cols="12">
              <div class="text text-right">
                <u-animate
                  name="fadeInLeftShort"
                  delay="0.4s"
                  duration="0.3s"
                >
                  <div>
                    <main-title
                      textClass='text-h4 pb-12'
                      captionClass='purple--text text-h5'
                      :caption="$t('lotusLanding.morefeature_headtitle2')"
                      :text="$t('lotusLanding.morefeature_title2')"
                      :align="isMobile ? 'center' : 'right'"
                    />
                    <div :class="{ 'text-center': isMobile }">
                      <p
                         :class="isMobile ? 'text-center' : 'text-right'"
                         class="use-text-subtitle2"
                      >
                        <!-- {{ $t('lotusLanding.morefeature_desc2') }} -->
                         The Lotus Project believes that it would foster the spirit of reciprocity. We believe that it would guide people towards positive actions -- and away from things that are not beneficial. And we are creating a way to do exactly that.
                         Flowers are often given to show appreciation, but we cannot keep perishable flowers at hand. By tokenizing a flower, we can always have the symbol with us. Tokens take up no physical space, and do not perish. The lotus in particular symbolizes purity, enlightenment, rebirth, and regeneration. These are the values which this token seeks to represent.
                      </p>
                      <!-- <v-btn color="primary">
                        {{ $t('lotusLanding.learnmore') }}
                      </v-btn> -->
                    </div>
                  </div>
                </u-animate>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <figure class="illustration">
                <img src="/images/lovephone.gif" alt="feature" />
              </figure>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
      <v-divider class="divider" />
      <div class="item last">
        <v-row>
          <v-col cols="12">
            <div class="text text-center">
              <main-title
                textClass='text-h4 pb-12'
                captionClass='purple--text text-h5'
                :caption="$t('lotusLanding.morefeature_headtitle3')"
                :text="$t('lotusLanding.morefeature_title3')"
                align="center"
              />
              <p class="use-text-subtitle2">
                <!-- {{ $t('lotusLanding.morefeature_desc3') }} -->
                 The Lotus token ledger is maintained on a permissionless, uncensorable, and open blockchain which is maintained and enabled by software produced by the Logos Foundation. New tokens are minted through proof-of-work mining and given as a reward to the developers who lovingly produce the infrastructure which enables the token to exist and be transferred, and to the miners who carefully maintain the accuracy of the blockchain. This occurs through "block rewards", which are open and transparent.

                Unlike Bitcoin, which is a speculative asset, Lotus is priceless -- a token of appreciation -- having sentimental value. The reward schedule is programmed to react to changes in the demand for Lotus tokens and is inflationary. By being inflationary, there is no reason to hoard it except as a reminder of how much people value us. Lotus is not to be an investment, but our investments in each other will generate more Lotus.

              </p>
              <!-- <v-btn color="primary">
                {{ $t('lotusLanding.learnmore') }}
              </v-btn> -->
            </div>
            <figure class="illustration">
              <img src="/images/community.png" alt="feature" />
            </figure>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './story-style.scss';
</style>

<script>
import Title from '../Title'

export default {
  components: {
    'main-title': Title
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
