<template lang="pug">
  div
    h1.text-h3.q-mb-xl {{ $route.name }}
    div.row.justify-center.q-gutter-lg.q-mb-xl.q-pb-xl
      user-item(
        v-if="users.length"
        v-for="user in users"
        :key="user._id"
        :name="user.name"
        :address="user.email"
        :roles="user.address"
        @delete-user="deleteUser(user._id)"
      )
    user-create(@user-created="fetchUsers")
</template>

<script>
import { mapActions } from "vuex"
import UserItem from "./UserItem"
import UserCreate from "./UserCreate"
export default {
  name: "AuthForm",
  components: {
    UserItem,
    UserCreate,
  },
  data() {
    return {
      age: 20,
      accept: false,
      email: "",
      password: "",
      hidePassword: true,
      users: [
        {
          name: "Placeholder",
        },
      ],
    }
  },
  methods: {
    onSubmit(ev) {
      console.log(ev)
    },
    onReset(ev) {
      console.log(ev)
    },
    async fetchUsers() {
      const { data: users } = await this.$axios.get("/api/user")
      this.users = users
    },
    async deleteUser(id) {
      try {
        const { data: users } = await this.$axios.delete(`/api/user/${id}`)
        
      } catch (error) {
        
      } finally {
        this.fetchUsers()
      }
    },
  },
  mounted() {
    this.fetchUsers()
  },
}
</script>
