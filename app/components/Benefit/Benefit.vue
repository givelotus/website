<template>
  <div class="root">
    <div class="parallax-img">
    </div>
    <v-container class="fixed-width">
      <div class="wrapper">
        <v-row>
          <v-col md="5" cols="12" justify="center" class="pa-0">
            <div class="desc">
              <main-title
                :caption="$t('lotusLanding.banner.caption')"
                :text="$t('lotusLanding.banner.text')"
                align="left"
                dark
                class='white--text'
              />
              <ul class="list pt-4">
                  <li v-for="item in $t('lotusLanding.banner.initiatives')" :key="item">
                  {{ item }}
                </li>
              </ul>
            </div>
          </v-col>
          <v-col md="7" cols="12" class="pa-0 d-flex">
            <hidden point="smDown">
              <figure class="img">
                <img src="/images/giving-white.png" alt="benefit" />
              </figure>
            </hidden>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './benefit-style.scss';
</style>

<script>
import Title from '../Title'
import Hidden from '../Hidden'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Hidden,
    'main-title': Title,
  },
  data() {
    return {
      img: imgAPI,
    }
  },
}
</script>
