<template>

  <loading v-if="loading" />

  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="../assets/user-signin.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2> 
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">

        <FormValidation v-if="errorMessage" :errorMessage="errorMessage" :errorDetails="errorDetails" />

        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" v-model="email" type="email" autocomplete="email" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address">
          </div>
          <div> 
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" v-model="password" type="password" autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password">
          </div>
        </div>

        <div>
          <button type="submit"
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
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>

</template>

<script lang="ts">
  import {
    defineComponent,
    reactive,
    toRefs,
  } from "vue";
  import {
    useRouter
  } from "vue-router";
  import {
    useApi
  } from "../utils/api";
  import {
    useAuth
  } from "../utils/auth";

  // @ts-ignore
  import FormValidation from './FormValidation.vue'

  import { useToast } from "vue-toastification";

  
  interface LoginPayload {
    email: string;
    password: string;
    rememberMe: boolean;
  }

  export default defineComponent({
    components: {
      FormValidation,
    },
    setup() {

     const toast = useToast();

      const {
        loading,
        post,
        errorMessage,
        errorDetails,
        errorFields,
      } = useApi("/api/v1/signin");

      const {
        setUser
      } = useAuth();

      const router = useRouter();

      const payload = reactive < LoginPayload > ({
        email: "admin@gmail.com",
        password: "123456",
        rememberMe: true,
      });

      const submit = () => {
        post(payload).then((res) => {
          // console.log(res);
          if (res) {
            setUser(res, payload.rememberMe);
            toast.success(res.msg);
            router.push({
              name: "ProductList"
            });
          }
        });
      };

      return {
        ...toRefs(payload),
        submit,
        loading,
        errorMessage,
        errorFields,
        errorDetails,
      };
    },
  }); 
</script>