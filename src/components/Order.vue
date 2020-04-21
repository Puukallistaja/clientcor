<template lang="pug">
  div
    h1.text-h3.q-mb-xl {{ $route.name }}
    div.col
      order-item(
        v-if="orders.length"
        v-for="(order, indexOfOrder) in orders"
        :key="order.restaurantId"
        :restaurantId="cutToSize(order.restaurantId)"
        :userId="cutToSize(order.userId)"
        :price="order.price"
        :items="order.items"
      )
</template>

<script>
import OrderItem from './OrderItem'
export default {
  name: "AuthForm",
  components: {
    OrderItem
  },
  data() {
    return {
      orders: [],
    }
  },
  methods: {
    cutToSize(str) {
      return str.slice(0, 8)
    }
  },
  async mounted() {
    const { data: orders } = await this.$axios.get("/api/order")
    this.orders = orders
  },
}
</script>
