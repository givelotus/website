<template>
  <div>
    <contact />
  </div>
</template>

<script>
import Contact from '~/components/Forms/Contact'
import brand from '~/static/text/brand'

export default {
  components: {
    Contact
  },
  head() {
    return {
      title: brand.lotus.name + ' - Contact'
    }
  }
}
</script>
