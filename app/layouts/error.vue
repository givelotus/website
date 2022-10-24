<template>
  <v-app>
    <div class="dedicated-page">
      <Error :error-code="error.statusCode" :text="$t('common.404')" />
      <main-footer />
    </div>
  </v-app>
</template>

<script>
import Error from '../components/Error'
import brand from '~/static/text/brand'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-footer': Footer,
    Error
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404
        ? brand.lotus.name + ' - ' + this.pageNotFound
        : brand.lotus.name + ' - ' + this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.dedicated-page {
  background: $palette-primary-dark;
}
</style>
