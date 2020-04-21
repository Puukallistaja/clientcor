<template lang="pug">
  div
    h1.text-h3.q-mb-sm {{ $route.name }}
    div.col
      .text-grey tap menu to start
</template>

<script>
import OrderItem from './OrderItem'
import TaskItem from './TaskItem'
export default {
  name: "AuthForm",
  components: {
    OrderItem,
    TaskItem,
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
    this.orders = orders.slice(1)
  },
}
</script>
