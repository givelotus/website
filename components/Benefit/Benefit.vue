<template>
  <div class="root">
    <div class="parallax-img">
      <!-- <hidden point="smDown">
        <v-parallax
          src="/images/lotus-background.png"
          :height="670"
          alt="parallax-bg"
        />
      </hidden> -->
    </div>
    <v-container class="fixed-width">
      <div class="wrapper">
        <v-row>
          <v-col md="5" cols="12" justify="center" class="pa-0">
            <div class="desc">
              <main-title
                caption="When you give or accept Lotus you are supporting the commons and adding value to the worldwide economy. "
                text="The initiatives you support when you use Lotus are: "
                align="left"
                dark
                class='white--text'
              />
              <ul class="list pt-4">
                <li>Human rights</li>
                <li>Renewable power</li>
                <li>Digital privacy</li>
                <li>Permaculture</li>
                <li>Open source software</li>
                <li>Humanitarian efforts</li>
              </ul>
              <!-- <v-btn large color="secondary">
                Learn more?
              </v-btn> -->
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
    'main-title': Title
  },
  data() {
    return {
      img: imgAPI
    }
  }
}
</script>
