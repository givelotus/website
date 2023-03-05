<template>
  <div class="more-feature">
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <u-animate-container>
          <v-row
            :class="[isMobile ? 'column-reverse' : 'row']"
            class="spacing6"
          >
            <div class="text">
              <u-animate name="fadeInLeftShort" delay="0.4s" duration="0.3s">
                <div>
                  <main-title
                    text-class="text-h4 pb-12"
                    caption-class="purple--text text-h5"
                    :caption="$t('lotusLanding.story.section1.headtitle')"
                    :text="$t('lotusLanding.story.section1.title')"
                    :align="isMobile ? 'center' : 'left'"
                  />
                  <div :class="{ 'text-center': isMobile }">
                    <p
                      class="use-text-subtitle2"
                      :class="isMobile ? 'text-center' : 'text-left'"
                    >
                      {{ $t('lotusLanding.story.section1.text') }}
                    </p>
                  </div>
                </div>
              </u-animate>
            </div>
          </v-row>
        </u-animate-container>
      </div>
      <div class="item">
        <u-animate-container>
          <v-row class="spacing6 text text-center">
            <u-animate name="fadeInLeftShort" delay="0.4s" duration="0.3s">
              <div>
                <main-title
                  text-class="text-h4 pb-12"
                  caption-class="purple--text text-h5"
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
          </v-row>
        </u-animate-container>
      </div>
      <div class="item">
        <u-animate-container>
          <v-row class="spacing6 text text-center">
            <u-animate name="fadeInLeftShort" delay="0.4s" duration="0.3s">
              <div>
                <main-title
                  text-class="text-h4 pb-12"
                  caption-class="purple--text text-h5"
                  :caption="$t('lotusLanding.story.section3.headtitle')"
                  :text="$t('lotusLanding.story.section3.title')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <div :class="{ 'text-center': isMobile }">
                  <p
                    :class="isMobile ? 'text-center' : 'text-left'"
                    class="use-text-subtitle2"
                  >
                    {{ $t('lotusLanding.story.section3.text') }}
                  </p>
                </div>
              </div>
            </u-animate>
          </v-row>
        </u-animate-container>
      </div>
    </v-container>
  </div>
</template>

<script>
import Title from '../Title'

export default {
  components: {
    'main-title': Title
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './story.scss';
</style>
