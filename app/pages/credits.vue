<template>
  <v-container class="page-wrap pt-16">
    <h1 class="pt-16">Contributors</h1>
    <h3 class="pt-8">
      We appreciate all the people that contribute to the Lotus ecosystem.
    </h3>
    <h3 class=" pb-8">
      Thank you:
    </h3>
    <div class="pb-16">
      <!-- create a list -->
      <ul style="list-style: none">
        <li v-for="contributor in contributors_sorted" :key="contributor.name">
          <a :href="contributor.url" style="color:white" class="text-h5" target="_blank">{{ contributor.name }}</a>
          ({{contributor.note}})
        </li>
      </ul>

        <!-- responsive image -->
        <div class="container pt-12">
            <img
            class="item"
            src="/images/lotus-community.gif"
            alt="feature" />
        </div>

    </div>
  </v-container>
</template>

<style>
.item {
  width: 100%;
  max-width: 800px;
  justify-content: center;
}

.container > div {
  margin-bottom: 10px;
}
</style>
<script>
export default {
  components: {},
  layout: 'default',
  data() {
    const contributors = [
      {
        name: 'Vic',
        note: 'givelotus.org nuxt website',
        url: 'https://github.com/wiktorcie/',
      },
    ]
    let contributors_sorted = contributors.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    return {
      contributors_sorted,
    }
  },
  computed: {
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown' // eslint-disable-line
    },
    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown'
    },
  },
  // head() {
  //   return {
  //     title: brand.lotus.name + ' - ' + this.$t('calculator.meta.name'),
  //     meta: [
  //       {
  //         property: 'author',
  //         content: 'Lotus - ' + this.$t('calculator.meta.subtitle'),
  //       },
  //       {
  //         name: 'description',
  //         content: this.$t('calculator.meta.description'),
  //       },
  //       {
  //         property: 'og:description',
  //         content: this.$t('calculator.meta.description'),
  //       },
  //       {
  //         property: 'og:title',
  //         content: 'Lotus - ' + this.$t('calculator.meta.subtitle'),
  //       },
  //     ],
  //   }
  // },
}
</script>
