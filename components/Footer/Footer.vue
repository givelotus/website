<template>
  <footer class="footer" :class="{ invert: invert }">
    <v-container class="max-lg">
      <v-row class="spacing4">
        <v-col
          class="pa-4"
          md="3"
          cols="12"
        >
          <div class="logo">
            <img
              style="border-radius: 40%"
              :src="logo"
              alt="logo"
            >
          </div>
          <p class="body-2 text-center" v-if="isDesktop">
            &copy;&nbsp;
            {{ brand.lotus.footerText }}
          </p>
        </v-col>
        <v-col
          class="px-6 py-0"
          md="6"
          cols="12"
        >
          <v-expansion-panels
            v-if="isMobile"
            :dark="!invert"
            class="accordion-root"
          >
            <v-expansion-panel
              v-for="(footer, index) in footers"
              :key="index"
              class="accordion-content"
            >
              <v-expansion-panel-header>
                <strong class="mb-4">
                  {{ footer.title }}
                </strong>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li
                    v-for="(item, index) in footer.description"
                    :key="index"
                  >
                    <nuxt-link :to="footer.link[index]">
                      {{ item }}
                    </nuxt-link>
                  </li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-row justify="space-around" v-if="isDesktop">
            <v-col
              v-for="(footer, index) in footers"
              :key="index"
              sm="3"
              cols="12"
              class="px-4 site-map-item"
            >
              <h6 class="title-nav">
                {{ footer.title }}
              </h6>
              <ul>
                <li
                  v-for="(item, index) in footer.description"
                  :key="index"
                >
                  <nuxt-link :to="footer.link[index]">
                    {{ item }}
                  </nuxt-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          md="3"
          cols="12"
          class="pa-4"
        >
          <div class="socmed">
            <v-btn icon class="social-btn"
              href="https://twitter.com/givelotus"
              target="_blank"
            >
              <v-icon large color="white">
                mdi-twitter
              </v-icon>
            </v-btn>

            <v-btn icon class="social-btn"
              href="https://www.reddit.com/r/lotusproject/"
              target="_blank"
            >
              <v-icon large color="white">
                mdi-reddit
              </v-icon>
            </v-btn>
            <v-btn icon class="social-btn"
              href="https://github.com/LogosFoundation"
              target="_blank"
            >
              <v-icon large color="white">
                mdi-github
              </v-icon>
            </v-btn>
            <v-btn icon class="social-btn"
              href="https://t.me/givelotus"
              target="_blank"
            >
              <v-icon large color="white">
                telegram
              </v-icon>
            </v-btn>
          </div>
          <v-select
            :items="langList"
            :value="lang"
            v-model="lang"
            label=""
            outlined
            class="select-lang"
            prepend-inner-icon="mdi-web"
            @change="switchLang(lang)"
          />
        </v-col>
      </v-row>
      <p class="body-2 text-center" v-if="isMobile">
        &copy;&nbsp;
        {{ brand.lotus.footerText }}
      </p>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/Lotus_C_Primary_Stacked.png'
import brand from '~/static/text/brand'

export default {
  data: () => ({
    logo: logo,
    brand: brand,
    lang: 'en',
    footers: [
      {
        title: 'Lotus Foundation',
        description: ['Team', 'History', 'Contact us', 'Locations'],
        link: ['#team', '#history', '#contact-us', '#locations']
      },
      {
        title: 'Resources',
        description: [
          'Resource',
          'Resource name',
          'Another resource',
          'Final resource'
        ],
        link: [
          '#resource',
          '#resource-name',
          '#another-resource',
          '#final-resource'
        ]
      },
      {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
        link: ['#privacy-policy', '#terms-of-use']
      }
    ]
  }),
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    langList: function() {
      const list = []
      this.$i18n.locales.map(item => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    }
  },
  mounted() {
    this.lang = this.$i18n.locale
  },
  methods: {
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>
