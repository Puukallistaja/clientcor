<template lang="pug">
q-layout
  q-header(elevated class="bg-black")
    q-toolbar
      q-btn(flat @click="drawer = !drawer" round dense icon="menu")
      q-toolbar-title
  q-drawer(
    v-model="drawer"
    :width="200"
    :breakpoint="500"
    bordered
    overlay
  )
   q-scroll-area.fit
    q-list.menu-list(padding)
      q-item(
        v-ripple
        clickable
      )
        q-item-section(avatar)
          q-icon(name="restaurant")
        q-item-section(@click="$router.push('/office/restaurant')") Restaurants
      q-item(
        active
        clickable
        v-ripple
      )
        q-item-section(avatar)
          q-icon(name="schedule") 
        q-item-section(@click="$router.push('/office/order')") Orders
  q-page-container
    router-view
</template>

<script>
export default {
  name: "LayoutTemplate",
  data() {
    return {
      drawer: false,
    }
  },
}
</script>
