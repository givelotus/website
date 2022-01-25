<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col md="6" class="pa-6">
          <title-main :align="isMobile ? 'center' : 'left'">
            <strong>FAQ</strong>
          </title-main>
          <p
            class="text use-text-subtitle2"
            :class="[isMobile ? 'text-center' : 'text-left']"
          >{{ $t('lotusLanding.faq_subtitle') }}</p>
          <hidden point="smDown">
            <div class="illustration">
              <img src="/images/lotus/faq.png" alt="illustration" />
            </div>
          </hidden>
        </v-col>
        <v-col md="6" cols="12" class="pa-6">
          <div class="accordion">
            <v-expansion-panels v-model="panel" active-class="expanded">
              <v-expansion-panel v-for="(item, index) in faqData" :key="index" class="paper">
                <v-expansion-panel-header class="content">
                  <p class="heading">{{ item.q }}</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="detail">
                  <p v-html="item.a"></p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'faq-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import Title from '../Title'

export default {
  components: {
    Hidden,
    'title-main': Title,
  },
  data() {
    return {
      panel: 0,
      faqData: [
        {
          q: this.$t('lotusLanding.faq.q1.question'),
          a: this.$t('lotusLanding.faq.q1.answer'),
        },
        {
          q: this.$t('lotusLanding.faq.q2.question'),
          a: this.$t('lotusLanding.faq.q2.answer'),
        },
        {
          q: this.$t('lotusLanding.faq.q3.question'),
          a: this.$t('lotusLanding.faq.q3.answer'),
        },
        {
          q: this.$t('lotusLanding.faq.q4.question'),
          a: this.$t('lotusLanding.faq.q4.answer'),
        },
        {
          q: this.$t('lotusLanding.faq.q5.question'),
          a: this.$t('lotusLanding.faq.q5.answer'),
        },
      ],
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
  },
}
</script>
