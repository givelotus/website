<template>
  <div class="page-wrap">
    <hidden point="mdUp">
      <div class="logo logo-header">
        <a :href="routerLink.lotus.home">
          <img src="/images/logo.png" alt="logo" />
          <p class="use-text-subtitle2">
            {{ brand.lotus.projectName }}
          </p>
        </a>
      </div>
    </hidden>
    <v-container class="max-lg inner-wrap">
      <div class="decoration">
        <svg class="left-deco">
          <use xlink:href="/images/lotus/deco-bg-left.svg#main" />
        </svg>
        <svg class="right-deco">
          <use xlink:href="/images/lotus/deco-bg-right.svg#main" />
        </svg>
      </div>
      <v-card class="form-box fragment-fadeUp">
        <v-btn
          :href="routerLink.lotus.home"
          icon
          class="backtohome"
        >
          <i class="ion-ios-home-outline" />
          <i class="ion-ios-arrow-thin-left" />
        </v-btn>
        <div class="auth-frame">
          <v-row>
            <v-col md="5" cols="12">
              <hidden point="smDown">
                <div class="greeting">
                  <div class="logo">
                    <img src="/images/logo.png" alt="logo" />
                    <p class="use-text-subtitle2">
                      {{ brand.lotus.projectName }}
                    </p>
                  </div>
                  <h4 class="use-text-title2 pb-2">
                    {{ title }}
                  </h4>
                  <h6 class="use-text-paragraph">
                    {{ subtitle }}
                  </h6>
                </div>
              </hidden>
            </v-col>
            <v-col md="7" cols="12">
              <div class="form-wrap">
                <slot />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import brand from '~/static/text/brand'
import routerLink from '~/static/text/link'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      brand: brand,
      routerLink: routerLink
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
