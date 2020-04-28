<template lang="pug">
q-layout
  q-header(elevated class="bg-black")
    q-toolbar
      q-btn(
        flat
        round
        dense
        icon="menu"
        @click="toggleDrawerMenu(!drawerMenuOpen)"
      )
      q-toolbar-title
    drawer-menu
  q-page-container.q-pl-xl
    router-view
</template>

<script>
import DrawerMenu from 'layouts/components/DrawerMenu'
import { mapActions, mapGetters } from "vuex"
export default {
  name: "LayoutTemplate",
  components: {
    DrawerMenu,
  },
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
    ...mapActions('ui', ['toggleDrawerMenu'])
  },
}
</script>
