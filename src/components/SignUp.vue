<template>

  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="../assets/user-signup.svg"
          alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up New Account
        </h2>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="submit">

        <FormValidation v-if="errorMessage" :errorMessage="errorMessage" :errorDetails="errorDetails" />

        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">

          <div class="col-span-6 sm:col-span-4">
            <label for="email_address" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" id="user_name" v-model="name" autocomplete="on" required
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6 sm:col-span-4">
            <label for="email_address" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="user_email" v-model="email" autocomplete="on" required
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6 sm:col-span-4">
            <label for="email_address" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" id="user_password" v-model="password" autocomplete="off"
              required
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6 sm:col-span-4">
            <label for="email_address" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" name="password" id="user_password_confirmation" v-model="password_confirmation"
              autocomplete="off" required
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>


        </div>

        <div>
          <button type="submit" :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: lock-closed -->
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>

</template>

<script lang="ts">
  import {
    computed,
    defineComponent,
    onErrorCaptured,
    reactive,
    ref,
    toRefs,
  } from "vue";
  import {
    useRouter
  } from 'vue-router'

  import {
    useApi
  } from "../utils/api";
  import {
    useAuth
  } from "../utils/auth"

  // @ts-ignore
  import FormValidation from './FormValidation.vue'

  interface SignUpPayload {
    name ? : string;
    email ? : string;
    password ? : string;
    password_confirmation ? : string;
  }

  export default defineComponent({
    components: {
      FormValidation,
    },
    setup() {
      const payload = reactive < SignUpPayload > ({
        name: undefined,
        email: undefined,
        password: undefined,
        password_confirmation: undefined,
      });

      const {
        error,
        loading,
        post,
        data,
        errorMessage,
        errorDetails,
        errorFields,
        computedClasses,
      } = useApi("/api/v1/signup");

      const {
        setUser
      } = useAuth()
      const router = useRouter()

      const submit = () => {
        post(payload).then(() => {
          setUser(data.value, true)
          router.push({
            name: 'Home'
          })
        });
      };
      return {
        ...toRefs(payload),
        submit,
        loading,
        errorMessage,
        errorFields,
        errorDetails,
        computedClasses,
      };
    },
  });
</script>