<template lang="pug">
q-layout
  q-header(elevated class="bg-black")
    q-toolbar
      q-btn(flat @click="drawer = !drawer" round dense icon="menu")
      q-toolbar-title
  q-drawer(
    v-model="drawer"
    :width="250"
    :breakpoint="500"
    bordered
    overlay
    mini
  )
   q-scroll-area.fit
    q-list.menu-list(padding)
      q-item(
        v-for="(site, indexOfSite) in siteList"
        :key="indexOfSite"
        :active="$route.path == site.path"
        @click="$router.push(site.path)"
        v-ripple
        clickable
      )
        q-item-section(avatar)
          q-icon(:name="site.icon")
        q-item-section {{ site.name }}
      q-item.q-mt-xl
        q-btn(
          outline
          color="warning"
          label="Log out"
          @click="logout"
        )
  q-page-container.q-pa-md
    router-view
</template>

<script>
export default {
  name: "LayoutTemplate",
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
        // {
        //   name: 'Tasks',
        //   path: '/office/task',
        //   icon: 'list',
        // },
      ]
    }
  },
  methods: {
    logout() {
      localStorage.setItem('accessToken', "")
      this.$router.push('/')
    }
  }
}
</script>
