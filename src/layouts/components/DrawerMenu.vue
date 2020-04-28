<template lang="pug">
  q-drawer(
    dark
    bordered
    mini-to-overlay
    overlay
    behavior="desktop"
    :width="180"
    :mini="!drawerMenuOpen"
    :value="true"
    @input="()=> {}"
  )
    q-list.fit(padding)
      q-item(
        v-ripple
        clickable
        v-for="(site, indexOfSite) in siteList"
        :key="indexOfSite"
        :active="$route.path == site.path"
        @click="$router.push(site.path)"
      )
        q-item-section(avatar)
          q-icon(:name="site.icon")
        q-item-section {{ site.name }}
      q-item(
        v-ripple
        clickable
        @click="logout"
      )
        q-item-section(avatar)
          q-icon(
            name="exit_to_app"
            color="warning"
          )
        q-item-section Log out
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "AuthForm",
  props: ["name", "address", "description"],
  data() {
    return {
      drawer: false,
      siteList: [
        {
          name: 'Restaurants',
          path: '/office/restaurant',
          icon: 'restaurant',
        },
        {
          name: 'Orders',
          path: '/office/order',
          icon: 'schedule',
        },
        {
          name: 'Users',
          path: '/office/user',
          icon: 'supervisor_account',
        },
      ]
    }
  },
  computed: {
    ...mapGetters('ui', ['drawerMenuOpen'])
  },
  methods: {
    ...mapActions('ui', ['toggleDrawerMenu']),
    logout() {
      localStorage.setItem('accessToken', "")
      this.$router.push('/')
    }
  }
}
</script>
