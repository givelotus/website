<template>
  <v-container class="page-wrap pt-16">
    <h1 class="pt-16">{{ $t('walletsPage.wallets') }}</h1>
    <h3 class="pt-8">
      {{ $t('walletsPage.title') }}
    </h3>
    <div class="pb-16">
      <!-- create a list -->
      <ul style="list-style: none" class="pt-8">
        <li v-for="wallet in wallets_sorted" :key="wallet.note">
          <a :href="wallet.url" style="color:white" class="text-h5" target="_blank">{{ wallet.name }}</a>
          ({{ wallet.note }})
        </li>
      </ul>

        <!-- responsive image -->
        <div class="container pt-12">
            <img
            style="max-width: 50%"
            class="item"
            src="/images/lovephone.gif"
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
    const wallets = [
      {
        name: 'SendLotus.com',
        note: 'browser based',
        url: 'https://sendlotus.com',
      },
      {
        name: 'Lotus Vase',
        note: 'Android',
        url: 'https://play.google.com/store/apps/details?id=org.cashweb.cashew',
      },
      {
        name: 'Cashew Wallet',
        note: 'iPhone',
        url: 'https://apps.apple.com/us/app/cashew-wallet/id1539306720',
      },
      {
        name: 'Lotus Node',
        note: 'Windows',
        url:
          'https://storage.googleapis.com/lotus-project/lotus-2.1.3-win64-setup-unsigned.exe',
      },
      {
        name: 'Lotus Node',
        note: 'OSX',
        url:
          'https://storage.googleapis.com/lotus-project/lotus-2.1.3-osx-unsigned.dmg',
      },
      {
        name: 'Lotus Node',
        note: 'Linux',
        url:
          'https://storage.googleapis.com/lotus-project/lotus-2.1.3-x86_64-linux-gnu.tar.gz',
      },
    ]
    let wallets_sorted = wallets.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    return {
      wallets_sorted,
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
