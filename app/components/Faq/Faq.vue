<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col md="6" class="pa-6">
          <title-main :align="isMobile ? 'center' : 'left'">
            <strong>
              FAQ
            </strong>
          </title-main>
          <p
            class="text use-text-subtitle2"
            :class="[isMobile ? 'text-center' : 'text-left']"
          >
            {{ $t('lotusLanding.faq_subtitle') }}
          </p>
          <hidden point="smDown">
            <div class="illustration">
              <!-- <parallax-medium /> -->
              <img src="/images/lotus/faq.png" alt="illustration" />
            </div>
          </hidden>
        </v-col>
        <v-col md="6" cols="12" class="pa-6">
          <div class="accordion">
            <v-expansion-panels
              v-model="panel"
              active-class="expanded"
            >
              <v-expansion-panel
                v-for="(item, index) in faqData"
                :key="index"
                class="paper"
              >
                 <v-expansion-panel-header class="content">
                  <p class="heading">
                    {{ item.q }}
                  </p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="detail">
                  <p v-html="item.a">
                  </p>
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
import ParallaxMedium from '../Parallax/Medium'
import Title from '../Title'

const faqData = [
  {
    q: 'How can I start mining?',
    a:
      'You will need to run Lotus Node on your computer. You can find instructions <a href="/calculator" target="_blank"> here</a>. To check your hashrate and approximate rewards check our <a href="/calculator" target="_blank">rewards calculator</a>.'
  },
  {
    q: 'What are available wallets?',
    a:
      'Cashew mobile wallet for <a href="https://play.google.com/store/apps/details?id=org.cashweb.cashew" target="_blank"> Android</a> and <a href="https://apps.apple.com/us/app/cashew-wallet/id1539306720" target="_blank">iPhone</a>. You can also run lightweight Lotus Node for <a href="https://storage.googleapis.com/lotus-project/lotus-2.0.3-win64-setup-unsigned.exe" target="_blank">Windows</a>, <a href="https://storage.googleapis.com/lotus-project/lotus-2.0.3-osx-unsigned.dmg" target="_blank">MacOS</a> and <a href="https://storage.googleapis.com/lotus-project/lotus-2.0.3-x86_64-linux-gnu.tar.gz" target="_blank">Linux</a>. '
  },
  {
    q: 'How do I get Lotus?',
    a:
      'You can use our <a href="https://faucet.lotuslounge.org/" target="_blank">faucet</a>. Or you can get gifted on our <a href="https://t.me/givelotus" target="_blank">telegram group</a>. You can also trade your other coins for Lotus [XPI] on <a href="https://www.exbitron.com/" target="_blank">Exbitron exchange</a>. '
  },
  {
    q: 'Where can I trade?',
    a:
      'You can trade Lotus on Exbitron for <a href="https://www.exbitron.com/trading/xpiusdt" target="_blank">USDT</a>, <a href="https://www.exbitron.com/trading/xpidoge" target="_blank">Dogecoin</a> and <a href="https://www.exbitron.com/trading/xpibch" target="_blank">Bitcoin Cash</a>'
    },
  {
    q: 'How can I contribute to the project?',
    a:
      'Check the open source code we have <a href="https://github.com/LogosFoundation" target="_blank">here</a> and feel free to contact developers on our <a href="https://t.me/givelotus" target="_blank">telegram group</a>.'
  }
]

export default {
  components: {
    Hidden,
    ParallaxMedium,
    'title-main': Title
  },
  data() {
    return {
      panel: 0,
      faqData: faqData
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
