<template lang="pug">
  q-page.flex.flex-center
    auth-form
</template>

<script>
import AuthForm from "components/AuthForm"
export default {
  name: 'HomePage',
  components: {
    AuthForm
  }
}
</script>
