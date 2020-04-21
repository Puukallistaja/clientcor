<template lang="pug">
  q-card(style="width: 14rem;")
    q-card-section
      q-card-section.q-pt-xs
        h1(class="text-h5 q-mt-sm q-mb-xs") {{ name }}
      q-card-section.flex.flex-center
        q-img.rounded-borders(src="https://loremflickr.com/g/800/600/avatar")
    q-separator(inset)
    div.row.items-center.justify-between.q-pa-sm
      q-icon(
        flat
        size="2rem"
        color="primary"
        name="email")
      span.text-center.text-grey {{ address }}
    q-separator
    q-card-actions.justify-between.q-py-lg
      q-btn(
        rounded
        dense
        color="warning"
      ) Edit
      q-btn(
        rounded
        dense
        color="negative"
        @click="$emit('delete-user')"
      ) Delete
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "AuthForm",
  props: ["name", "address", "description"],
}
</script>
