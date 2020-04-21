<template lang="pug">
  div
    q-form(
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    )
      q-input(
        v-model="name"
        suffix="@backoffice.com"
        placeholder="name"
        rounded
        outlined
      )
      q-input(
        v-model="password"
        rounded
        outlined
        :type="hidePassword ? 'password' : 'text'"
        hint="Password with toggle"
      )
        template(v-slot:append)
          q-icon(
            :name="hidePassword ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="hidePassword = !hidePassword"
          )
      .q-mb-xl.justify-center.row
        q-btn(
          label="Create user"
          type="submit"
          color="primary"
          size="md"
        )
        q-btn(
          flat
          label="Reset field"
          type="reset"
          color="primary"
          size="md"
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
      hidePassword: true,
      name: "",
      password: "",
    }
  },
  methods: {
    async onSubmit(ev) {
      const { name, password } = this
      const { data: user } = await this.$axios.post("/api/user", {
        name,
        email: name + "@backoffice.com",
        password
      })
      this.$emit('user-created')
    },
    onReset(ev) {
      this.name = ""
      this.password = ""
    },
  },
  async mounted() {},
}
</script>
