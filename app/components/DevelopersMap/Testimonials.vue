<template>
  <div class="root">
    <v-container>
      <!-- <title-main dark>
        {{ $t('profileLanding.testi_title') }}
        <strong>
          {{ $t('profileLanding.testi_titleBold') }}
        </strong>
      </title-main> -->
      <v-row>
        <v-col md="7" cols="12">
          <div class="world-map">
            <hidden point="xsDown">
              <div class="avatar-wrap">
                <div
                  v-for="(item, index) in testiData"
                  :key="index"
                  :style="{ left: item.x + 'px', top: item.y + 'px'}"
                  class="avatar-item"
                >
                  <v-menu
                    :nudge-left="130"
                    open-on-hover
                    origin="center center"
                    transition="scale-transition"
                    top
                    offset-y
                    content-class="paper"
                  >
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" icon>
                        <avatar-buble
                          :avatar="item.avatar"
                          :name="item.name"
                        />
                      </v-btn>
                    </template>
                    <v-card class="paper-block">
                      <p class="pb-2">
                        {{ item.text }}
                      </p>
                      <h6>
                        {{ item.name }}
                      </h6>
                      <p class="title-main">
                        {{ item.title }}
                      </p>
                    </v-card>
                  </v-menu>
                </div>
              </div>
            </hidden>
            <hidden point="smUp" v-if="loaded">
              <slick ref="slick" :options="slickOptions">
                <div
                  v-for="(item, index) in testiData"
                  :key="index"
                  class="item-carousel"
                >
                  <v-card class="card">
                    <p class="body-1">
                      {{ item.text }}
                    </p>
                    <div class="name">
                      <v-avatar v-if="item.avatar" class="avatar">
                        <img :src="item.avatar" :alt="item.name">
                      </v-avatar>
                      <v-avatar v-else color="grey" class="avatar">
                        <strong class="white--text headline">
                          {{ firsthChar(item.name) }}
                        </strong>
                      </v-avatar>
                      <span class="caption">
                        {{ item.name }}
                      </span>
                    </div>
                  </v-card>
                </div>
              </slick>
            </hidden>
          </div>
        </v-col>
        <v-col md="5" cols="12">
          <div class="text">
            <u-animate-container>
              <u-animate
                :offset="-200"
                name="fadeInUpShort"
                delay="0.2s"
                duration="0.3s"
              >
                <h3 class="title-serif use-text-title2">
                  Swarm wise around the globe
                </h3>
              </u-animate>
              <u-animate
                :offset="-200"
                name="fadeInUpShort"
                delay="0.3s"
                duration="0.3s"
              >
                <div>
                  <p class="use-text-paragraph">
                    self organizing around the ideals
                  </p>
                  <v-btn color="secondary" href="#contact" large class="button">
                    Join the development
                  </v-btn>
                </div>
              </u-animate>
            </u-animate-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>

<script>
import Hidden from '../Hidden'
import AvatarBuble from './AvatarBuble'
import testiData from './developersData'
import Title from '../Title'

export default {
  components: {
    'title-main': Title,
    AvatarBuble,
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      testiData: testiData,
      popupData: {},
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        arrows: false
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  computed: {
    firsthChar() {
      return txt => txt.charAt(0)
    }
  }
}
</script>
