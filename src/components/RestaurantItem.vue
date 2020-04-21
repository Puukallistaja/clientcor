<template lang="pug">
  q-card(style="width: 12rem;")
    q-card-section
      q-btn(dense color="primary" round icon="email" class="q-ml-md q-ml-auto")
        q-badge(color="red" floating) 4
      q-card-section.q-pt-xs
        h1(class="text-h5 q-mt-sm q-mb-xs") {{ name }}
      q-card-section.flex.flex-center
        q-img.rounded-borders(
          src="https://loremflickr.com/g/800/600/restaurant"
        )
    q-separator(inset)
    div.q-pa-sm.column.items-center
      q-icon(
        flat
        size="2rem"
        color="primary"        
        name="location_on")
      span.text-center.text-caption.text-grey {{ address }}
    q-separator
    q-card-actions
      q-btn(
        flat
        color="primary"
      ) Reserve
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "AuthForm",
  props: ["name", "address", "description"],
}
</script>
