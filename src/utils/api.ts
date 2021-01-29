import axios, { AxiosRequestConfig } from 'axios'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth, AUTH_TOKEN } from './auth'
import { useToast } from "vue-toastification";

export const useApiWithAuth = (endpoint: string) => {
  const { user } = useAuth()
  return useApi(endpoint, user?.value ? user.value[ AUTH_TOKEN ] : undefined)
}

export const useApi = (endpoint: string, access_token?: string) => {
  const router = useRouter()
  const api = axios.create({
    baseURL: process.env.VUE_APP_API || 'https://vue3api.ebuz.xyz/',
    headers: {
      Authorization: access_token ? `Bearer ${access_token}` : undefined,
    }
  })

  const data = ref()
  const loading = ref(false)
  const error = ref()

  const post = (payload?: Record<string, any>) => {
    loading.value = true
    // error.value = undefined

    return api.post(endpoint, payload)
      .then(res => data.value = res.data)
      .catch(e => {
        // console.log(e.response);
        error.value = e.response
        throw e
      })
      .finally(() => loading.value = false)
  }

  const get = (query?: Record<string, any>, config?: AxiosRequestConfig) => {
    loading.value = true
    // error.value = undefined

    let queryString = ''

    if ( query ) {
      queryString = '?' + Object.entries(query)
        .map(([ key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&')
    }

    return api.get(endpoint + queryString, config)
      .then(res => data.value = res.data)
      .catch(e => {
        error.value = e.response
        throw e
      })
      .finally(() => loading.value = false)
  }


  const put = (payload?: Record<string, any>) => {
    loading.value = true
    // error.value = undefined
    payload._method= 'put'
    return api.put(endpoint, payload)
      .then(res => data.value = res.data)
      .catch(e => {
        error.value = e.response
        throw e
      })
      .finally(() => loading.value = false)
      
  }

  // @ts-ignore
  const del = () => {
    loading.value = true
    // error.value = undefined

    return api.delete(endpoint)
      .then(res => data.value = res.data)
      .catch(e => {
        error.value = e.response
        throw e
      })
      .finally(() => loading.value = false)
  }
  

  const errorMessage = computed(() => {
    // console.log('?? compute', error.value);
    if (error.value) {
      return error.value.data.errors
    }
  })

  const errorDetails = computed(() => {
    if ( error.value && error.value.data.errors ) {
      return error.value.data.errors
    }
  })

  const errorFields = computed(() => {
    if (error.value && Array.isArray(error.value.data.errors)) {
      return (error.value.data.errors as string[]).reduce((acc: Record<string, any>, msg: string) => {
        let [ field ] = msg.split(' ')
        // TODO: Maximal...
        if (!acc[field]) {
          acc[field] = []
        }
        acc[field].push(msg)
        return acc
      }, {})
    }
  })

  watch([ error ], () => {
    // If 401 Unauthorised, force user to signin
    console.log(error.value);
    if ( error.value.status === 401 && router ) {
      const toast = useToast();
      toast.error('Please Sign In')
      router.push('/signin')
    }
  })

  return {
    loading,
    data,
    error,
    get,
    post,
    put,
    del,
    errorMessage,
    errorDetails,
    errorFields,
  }
}

// export default api
