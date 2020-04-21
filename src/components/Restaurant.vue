<template lang="pug">
  div
    h1.text-h3.q-mb-xl {{ $route.name }}
    div.row.justify-center.q-gutter-md
      restaurant-item(
        v-if="restaurants.length"
        v-for="restaurant in restaurants"
        :key="restaurant.name"
        :name="restaurant.name"
        :description="restaurant.description"
        :address="restaurant.address"
      )
</template>

<script>
import { mapActions } from "vuex"
import RestaurantItem from './RestaurantItem'
export default {
  name: "AuthForm",
  components: {
    RestaurantItem
  },
  data() {
    return {
      age: 20,
      accept: false,
      email: "",
      password: "",
      hidePassword: true,
      restaurants: [{
        name: "Placeholder"
      }],
    }
  },
  methods: {
    onSubmit(ev) {
      console.log(ev)
    },
    onReset(ev) {
      console.log(ev)
    },
  },
  async mounted() {
    const { data: restaurants } = await this.$axios.get("/api/restaurant")
    this.restaurants = restaurants
  },
}
</script>
