<template>
  <div class="main-wrap">
    <main-header/>
    <Calculator
    />
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
      title: brand.lotus.name + ' - Calculator',
      meta: [
        { property: 'author', content: 'Lotus - Rewards Calculator' },
        { name: 'description', content: "Calculate rewards and electricity costs for mining Lotus with your GPU card." },
        { property: 'og:description', content: "Calculate rewards and electricity costs for mining Lotus with your GPU card." },
      ],
    }
  }
}
</script>
