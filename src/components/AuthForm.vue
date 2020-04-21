<template lang="pug">
  div
    h1.text-h3.q-mb-xl In the back
    q-form(
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    )
      q-input(
        v-model="email"
        type="email"
        suffix="@backoffice.com"
        rounded
        outlined
      )
        template(v-slot:before)
          q-icon(name="mail")
      q-input(
        v-model="password"
        rounded
        outlined
        :type="hidePassword ? 'password' : 'text'"
        hint="Password with toggle"
      )
        template(v-slot:before)
          q-icon(name="vpn_key")
        template(v-slot:append)
          q-icon(
            :name="hidePassword ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="hidePassword = !hidePassword"
          )
      div.q-ml-lg.q-pl-md
        q-toggle(
          v-model="accept"
          label="I accept the license and terms"
        )
      div.q-ml-xl.q-pl-xs.q-mt-xl.justify-center.row
        q-btn(
          label="Submit"
          type="submit"
          color="primary"
          size="lg"
        )
        q-btn(
          label="Reset"
          type="reset"
          color="primary"
          size="lg"
          flat
          class="q-ml-sm"
        )
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "AuthForm",
  data() {
    return {
      age: 20,
      accept: false,
      email: "",
      password: "",
      hidePassword: true,
    }
  },
  methods: {
    ...mapActions("todos", ["fetchTodos"]),
    onSubmit(ev) {
      console.log(ev)
    },
    onReset(ev) {
      console.log(ev)
    },
  },
  async mounted() {
    await this.fetchTodos(1)
  },
}
</script>
