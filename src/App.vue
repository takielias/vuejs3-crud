<template>
  <Welcome msg="Vue 3 + Crud" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Welcome from './components/welcome.vue'

export default defineComponent({
  name: 'App',
  components: {
    Welcome
  }
})
</script>