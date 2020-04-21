<template lang="pug">
  q-list(
    bordered
    separator
    style="width: 300px;"
  )
    q-slide-item(
      @left="onLeft"
      @right="onRight"
      left-color="green"
      right-color="red"
    )
      template(v-slot:left)
        div.row.items-center  Accept
          q-icon(left name="done")
      template(v-slot:right)
        div.row.items-center Cancel
          q-icon(right name="cancel")
      
      q-item.row.q-my-md
        q-item-section(avatar)
          q-icon(color="primary" name="receipt")
        q-item-section
          span.text-weight-thin restaurant
          q-item-section {{ restaurantId }}
        q-item-section
          span.text-weight-thin user
          q-item-section {{ userId }}
        q-item-section
          span.text-weight-thin price
          q-item-section.text-primary.text-bold {{ price }} $

      q-expansion-item(
        expand-separator
        icon="perm_identity"
        label="Order details"
        caption="John Doe"
      )
        q-card
          q-card-section
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            | commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            | eveniet doloribus ullam aliquid.
</template>
<script>
export default {
  name: "OrderItem",
  props: ["restaurantId", "userId", "price", "items"],
  methods: {
    onLeft ({ reset }) {
      this.$q.notify({message: 'Order is accepted', icon: 'done', color: 'green'})
      this.finalize(reset)
    },

    onRight ({ reset }) {
      this.$q.notify({message: 'Order is cancel', icon: 'cancel', color: 'red'})
      this.finalize(reset)
    },

    finalize (reset) {
      this.timer = setTimeout(() => {
        reset()
      }, 1000)
    }
  },

  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>
