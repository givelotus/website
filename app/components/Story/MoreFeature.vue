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
                      text-class='text-h4 pb-12'
                      caption-class='purple--text text-h5'
                      :caption="$t('lotusLanding.story.section1.headtitle')"
                      :text="$t('lotusLanding.story.section1.title')"
                      :align="isMobile ? 'center' : 'left'"
                    />
                    <div :class="{ 'text-center': isMobile }">
                      <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-left'">
                         {{ $t('lotusLanding.story.section1.text') }}
                         </p>
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
                      text-class='text-h4 pb-12'
                      caption-class='purple--text text-h5'
                      :caption="$t('lotusLanding.story.section2.headtitle')"
                      :text="$t('lotusLanding.story.section2.title')"
                      :align="isMobile ? 'center' : 'right'"
                    />
                    <div :class="{ 'text-center': isMobile }">
                      <p
                         :class="isMobile ? 'text-center' : 'text-right'"
                         class="use-text-subtitle2"
                      >
                        {{ $t('lotusLanding.story.section2.text') }}
                      </p>
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
                text-class='text-h4 pb-12'
                caption-class='purple--text text-h5'
                :caption="$t('lotusLanding.story.section3.headtitle')"
                :text="$t('lotusLanding.story.section3.title')"
                align="center"
              />
              <p class="use-text-subtitle2">
                {{ $t('lotusLanding.story.section3.text') }}
              </p>
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
    'main-title': Title,
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
  },
}
</script>
