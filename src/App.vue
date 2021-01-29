<template>
  <Welcome />
</template>

<script lang="ts">
  import Welcome from './components/Welcome.vue'

  import {
    defineComponent
  } from "vue";

  export default defineComponent({
    name: 'App',
    components: {
      Welcome
    },
  })
</script>