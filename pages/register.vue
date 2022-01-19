<template>
  <div>
    <register-form />
  </div>
</template>

<script>
import brand from '~/static/text/brand'
import RegisterForm from '~/components/Forms/Register'

export default {
  components: {
    RegisterForm
  },
  head() {
    return {
      title: brand.lotus.name + ' - Register'
    }
  }
}
</script>
