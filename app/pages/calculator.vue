<template>
  <div class="main-wrap">
    <main-header />
    <Calculator />
  </div>
</template>

<script>
import Calculator from '~/components/Forms/Calculator'
import brand from '~/static/text/brand'
import Header from '~/components/Header'

export default {
  components: {
    Calculator,
    'main-header': Header,
  },

  async asyncData({ store }) {
    try {
      await store.dispatch('calculator/fetchPrice')
    } catch (e) {
      console.log('couldnt fetch price')
    }

    try {
      await store.dispatch('calculator/fetchDifficulty')
    } catch (e) {
      console.log('couldnt fetch difficulty')
    }

    try {
      await store.dispatch('calculator/fetchNetworkHashrate')
    } catch (e) {
      console.log('couldnt fetch network hashrate')
    }
  },
  head() {
    return {
      title: brand.lotus.name + ' - ' + this.$t('calculator.meta.name'),
      meta: [
        {
          property: 'author',
          content: 'Lotus - ' + this.$t('calculator.meta.subtitle'),
        },
        {
          name: 'description',
          content: this.$t('calculator.meta.description'),
        },
        {
          property: 'og:description',
          content: this.$t('calculator.meta.description'),
        },
        {
          property: 'og:title',
          content: 'Lotus - ' + this.$t('calculator.meta.subtitle'),
        },
      ],
    }
  },
}
</script>
