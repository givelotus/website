<template>
  <div class="page-wrap">
    <v-snackbar
      :timeout="4000"
      top
      right
      v-model="snackbar"
      class="notification"
    >
      <div class="action">
        Message Sent
      </div>
      <v-btn
        text
        icon
        @click="snackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <hidden point="mdUp">
      <div class="logo logo-header">
        <nuxt-link :to="routeLink.lotus.home">
          <img :src="logo" alt="logo">
          <span class="use-text-title">
            {{ brand.lotus.projectName }}
          </span>
        </nuxt-link>
      </div>
    </hidden>
    <v-container class="inner-wrap max-md">
      <v-btn
        :href="routeLink.lotus.home"
        icon
        class="backtohome"
      >
        <i class="ion-ios-home-outline" />
        <i class="ion-ios-arrow-thin-left" />
      </v-btn>
      <div class="decoration">
        <svg class="left-deco">
          <use xlink:href="/images/lotus/deco-bg-left.svg#main" />
        </svg>
        <svg class="right-deco">
          <use xlink:href="/images/lotus/deco-bg-right.svg#main" />
        </svg>
      </div>
      <v-card class="form-box fragment-fadeUp">
        <div class="full-form-wrap">
          <h3 class="use-text-title title-contact pb-3 text-center">
            {{ $t('common.contact_title2') }}
          </h3>
          <p class="desc use-text-subtitle2 text-center">
            {{ $t('common.contact_subtitle') }}
          </p>
          <div class="form">
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-row class="spacing6">
                <v-col cols="12" sm="6" class="px-6">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :label="$t('common.form_name')"
                    color="white"
                    class="input light"
                    filled
                    required
                  />
                </v-col>
                <v-col cols="12" sm="6" class="px-6">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :label="$t('common.form_email')"
                    class="input light"
                    color="white"
                    filled
                    required
                  />
                </v-col>
                <v-col cols="12" sm="6" class="px-6">
                  <v-text-field
                    v-model="phone"
                    :label="$t('common.form_phone')"
                    color="white"
                    class="input light"
                    filled
                  />
                </v-col>
                <v-col cols="12" sm="6" class="px-6">
                  <v-text-field
                    v-model="company"
                    :label="$t('common.form_company')"
                    color="white"
                    class="input light"
                    filled
                  />
                </v-col>
                <v-col cols="12" class="px-6">
                  <v-textarea
                    v-model="message"
                    rows="6"
                    color="white"
                    class="input light"
                    filled
                    :label="$t('common.form_message')"
                  />
                </v-col>
              </v-row>
              <div class="btn-area flex">
                <div class="form-control-label">
                  <v-checkbox
                    v-model="checkbox"
                    color="secondary"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    :label="$t('common.form_terms')"
                    class="white-label"
                    required
                  />
                  <span>
                    <a href="#" class="link">
                      {{ $t('common.form_privacy') }}
                    </a>
                  </span>
                </div>
                <v-btn
                  :block="isMobile"
                  color="secondary"
                  @click="validate"
                  large
                >
                  {{ $t('common.form_send') }}
                </v-btn>
              </div>
            </v-form>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import logo from '~/static/images/logo.png'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      valid: true,
      snackbar: false,
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phone: '',
      company: '',
      message: '',
      checkbox: false,
      logo: logo,
      brand: brand,
      routeLink: link
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
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
