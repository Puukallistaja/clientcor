<template lang="pug">
  div
    h1.text-h3.q-mb-xl In the back
    q-form(
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    )
      q-input(
        v-model="username"
        suffix="@backoffice.com"
        placeholder="name"
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
          flat
          label="Reset"
          type="reset"
          color="primary"
          size="lg"
          class="q-ml-sm"
          @click="onReset"
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
      hidePassword: true,
      username: "bilu",
      password: "bilu",
    }
  },
  methods: {
    async onSubmit(ev) {
      const { username, password } = this
      const { data: proof } = await this.$axios.post(
        "/oauth/token",
        {},
        {
          // these parameters should be in .env
          auth: { username: "mobileClientId", password: "mobileClientSecret" },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          params: {
            grant_type: "password",
            username,
            password,
          },
        }
      )
      localStorage.setItem("accessToken", proof.accessToken)
      this.$router.push("/office")
    },
    onReset() {
      this.email = ""
      this.password = ""
    },
  },
  async mounted() {},
}
</script>
