<template>
  <div class="loading">

  </div>
</template>

<script lang="ts">
  import {
    defineComponent
  } from "vue"
  import {
    useRouter
  } from "vue-router"
  import {
    useAuth
  } from "../utils/auth"
  import {
    useApiWithAuth
  } from "../utils/api";

  interface LoginPayload {
    email: string;
    password: string;
    rememberMe: boolean;
  }
  import {
    useToast
  } from "vue-toastification";

  export default defineComponent({
    setup() {
      const toast = useToast();
      const {
        loading,
        get
      } = useApiWithAuth("/api/v1/signout");
      get()
        .then(res => {
          toast.success(res.msg);
        })
      const {
        logout
      } = useAuth()
      const router = useRouter()
      logout().then(() => router.push({
        name: 'Home'
      }))
      return {
        loading,
      };
    }
  })
</script>

<style>
</style>