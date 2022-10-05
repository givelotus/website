<template>
  <div class="root">
    <v-container class="fixed-width">
      <div
        class="text-center text-bold"
      >{{ $t('lotusLanding.before_carousel_1') }}</div>
      <div
        class="text-center text-bold"
      >{{ $t('lotusLanding.before_carousel_2') }}</div>

      <div v-if="loaded">
        <vue-horizontal-list :items="items" :options="options" class="project-images">
          <template #default="{ item }">
            <card
              :img="item.image"
              :title="item.title"
              :desc="item.content"
              :url="item.url"
              :button="$t('lotusLanding.services_button')"
            ></card>
          </template>
        </vue-horizontal-list>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './carousel-style.scss';
</style>

<script>
import images from '~/static/images/project-images'
import Card from '../Cards/Default'
import VueHorizontalList from 'vue-horizontal-list'

export default {
  components: {
    Card,
    VueHorizontalList,
  },
  data() {
    return {
      items: [
        {
          title: 'Stampchat',
          content: this.$t('lotusLanding.stampchat_desc'),
          url: 'https://stampchat.io/',
          image: images.projects.stampchat,
        },
        {
          title: 'Be.cash',
          content: this.$t('lotusLanding.becash_desc'),
          url: 'https://be.cash/',
          image: images.projects.becash,
        },
        {
          title: 'GiveLotus2VN',
          content: this.$t('lotusLanding.givelotus2vn_desc'),
          url: 'https://www.givelotus.vn/',
          image: images.projects.givelotus2vn,
        },
        {
          title: 'Bitcoin ABC',
          content: this.$t('lotusLanding.bitcoin_abc_desc'),
          url: 'https://www.bitcoinabc.org/',
          image: images.projects.bitcoinabc,
        },
      ],
      options: {
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { size: 3 },
        ],
        navigation: {
          // when to show navigation
          start: 100,
          color: '#000',
        },
        autoplay: {
          // enable/disable playing slideshow
          play: true,
          // the delay duration between slides in milliseconds
          speed: 15000,
          // if setup, the slideshow will be in the loop.
          repeat: true,
        },
      },
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    },
  },
}
</script>

<style scoped>
p {
  margin-top: 4px;
  display: -webkit-box;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}
.subtitle {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
}
#project-images img {
  object-fit: cover;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
