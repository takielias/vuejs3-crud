<template>

  <loading v-if="authenticating" />

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">

      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link :to="{ name: 'Home' }">
            <span class="sr-only">vuejs 3</span>
            <img class="h-8 w-auto sm:h-10" src="../assets/shop.svg" alt="">
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

         <router-link class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none" to="/product-list">Product List</router-link>
        
         <router-link v-if="!loggedin" class="ml-4 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-yellow-500 rounded shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none" to="/signin">Sign In</router-link>
      
          <router-link v-if="!loggedin"
            class="ml-4 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-500 rounded shadow ripple hover:shadow-lg hover:bg-indigo-600 focus:outline-none"
            to="/signup">Sign up</router-link>

            <router-link v-if="loggedin" class="ml-4 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-black rounded shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black" to="/signout">Sign Out</router-link>
       
        </div>

      </div>

      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <router-view />
          </div>
        </div>
      </div>

    </div>

  </div>


</template>

<script lang="ts">
  import {
    computed,
    defineComponent
  } from 'vue'

  import {
    useAuth
  } from "../utils/auth";

  export default defineComponent({
    setup() {
    const { user } = useAuth();
    const loggedin = computed(() => {
      return user?.value && user.value.id
        ? true
        : false;
    });
    return { user, loggedin};
  },
  })
</script>