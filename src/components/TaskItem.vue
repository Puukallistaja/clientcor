<template lang="pug">
  div(class="q-pa-md" style="width: 350px")
    q-list(bordered)
        q-expansion-item(
          group="somegroup"
          icon="explore"
          label="First"
          default-opened
          header-class="text-primary")
        
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
            q-card
              q-card-section
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                | commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                | eveniet doloribus ullam aliquid.

            q-separator

            q-expansion-item(group="somegroup" icon="perm_identity" label="Second" header-class="text-teal")
              q-card
                q-card-section
                  | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  | commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  | eveniet doloribus ullam aliquid.

            q-separator

            q-expansion-item(group="somegroup" icon="shopping_cart" label="Third" header-class="text-purple")
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
