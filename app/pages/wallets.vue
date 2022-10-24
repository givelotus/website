<template>
  <v-container class="page-wrap pt-16">
    <h1 class="pt-16">
      {{ $t('walletsPage.wallets') }}
    </h1>
    <h3 class="pt-8">
      {{ $t('walletsPage.title') }}
    </h3>
    <div class="pb-16 pt-8">
      <v-data-table :headers="headers" :items="wallets" :items-per-page="100">
        <template #item.links="{ item }">
          <v-btn
            v-if="item.web"
            icon
            class="social-btn"
            :href="`${item.web}`"
            target="_blank"
          >
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
          <v-btn
            v-if="item.iphone"
            icon
            class="social-btn"
            :href="`${item.iphone}`"
            target="_blank"
          >
            <v-icon>mdi-apple-ios</v-icon>
          </v-btn>
          <v-btn
            v-if="item.android"
            icon
            class="social-btn"
            :href="`${item.android}`"
            target="_blank"
          >
            <v-icon>mdi-android</v-icon>
          </v-btn>
          <v-btn
            v-if="item.macos"
            icon
            class="social-btn"
            :href="`${item.macos}`"
            target="_blank"
          >
            <v-icon>mdi-apple</v-icon>
          </v-btn>
          <v-btn
            v-if="item.windows"
            icon
            class="social-btn"
            :href="`${item.windows}`"
            target="_blank"
          >
            <v-icon>mdi-microsoft-windows</v-icon>
          </v-btn>
          <v-btn
            v-if="item.linux"
            icon
            class="social-btn"
            :href="`${item.linux}`"
            target="_blank"
          >
            <v-icon>mdi-linux</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script lang="ts">
type WalletInfo = {
  name: string
  description: string
  iphone?: string
  android?: string
  macos?: string
  linux?: string
  windows?: string
  web?: string
}

const wallets: Array<WalletInfo> = [
  {
    name: 'SendLotus.com',
    description: 'Simple browser-based Lotus wallet',
    web: 'https://sendlotus.com'
  },
  {
    name: 'Lotus Vase',
    description: 'Simple to use mobile wallet',
    android: 'https://play.google.com/store/apps/details?id=org.cashweb.cashew',
    iphone: 'https://apps.apple.com/us/app/cashew-wallet/id1539306720'
  },
  {
    name: 'lotusd',
    description: 'Lotus Daemon software (Only receommended for power users)',
    windows:
      'https://storage.googleapis.com/lotus-project/lotus-3.3.3-win64-setup-unsigned.exe',
    macos:
      'https://storage.googleapis.com/lotus-project/lotus-3.3.3-osx-unsigned.dmg',
    linux:
      'https://storage.googleapis.com/lotus-project/lotus-3.3.3-x86_64-linux-gnu.tar.gz'
  },
  {
    name: 'Stamp',
    description:
      'Web-based cryptomessenger, allows you to talk to your Lotus friends',
    web: 'https://sendlotus.com'
  }
]
const headers = [
  {
    text: 'Name',
    sortable: false,
    value: 'name'
  },
  {
    text: 'Description',
    sortable: false,
    value: 'description'
  },
  {
    text: 'Links to Supported Platforms ',
    sortable: false,
    value: 'links'
  }
]

export default {
  components: {},
  layout: 'default',
  data() {
    return {
      wallets,
      headers
    }
  }
}
</script>

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
