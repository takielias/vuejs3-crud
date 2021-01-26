<template>

<!-- This example requires Tailwind CSS v2.0+ -->

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Ready to dive in?</span>
      <span class="block text-indigo-600">Start your free trial today.</span>
    </h2>
</div>


</template>

<script lang="ts">
  import {
    ref,
    defineComponent
  } from 'vue'

  export default defineComponent({
    name: 'Home',
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    setup: () => {
      const count = ref(0)
      return {
        count
      }
    }
  })
</script>