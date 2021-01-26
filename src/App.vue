<template>
  <Welcome msg="Vue 3 + Crud" />
</template>

<script lang="ts">

import Welcome from './components/Welcome.vue'

import { defineComponent, watch } from "vue";
import { useAuth } from "./utils/auth";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: 'App',
  components: { Welcome },
  props:['msg']
})
</script>