<template>

  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="../../assets/product.svg" alt="Workflow">
      </div>
      <form @submit.prevent="addProduct" enctype="multipart/form-data">

        <FormValidation v-if="errorMessage" :errorMessage="errorMessage" :errorDetails="errorDetails" />

        <div class="shadow sm:rounded-md sm:overflow-hidden">

          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

            <div class="col-span-6 sm:col-span-4">
              <label for="email_address" class="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" v-model="title" id="product_title"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>

            <div class="col-span-6 sm:col-span-4">

              <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm">
                    ৳
                  </span>
                </div>
                <input type="text" v-model="price" id="price"
                  class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00">
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <label for="currency" class="sr-only">Currency</label>
                  <select id="currency" name="currency"
                    class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                    <option>BDT</option>
                  </select>
                </div>
              </div>

            </div>

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
                Description
              </label>

              <div class="mt-1">
                <textarea id="about" name="about" rows="3" v-model="description"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Product Description"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief description for your product.
              </p>
            </div>

            <div v-if="image" class="md:flex shadow-lg  mx-6 md:mx-auto my-40 h-64">
              <img class="h-full w-full  object-cover rounded-lg rounded-r-none pb-5/6"
                :src="image" alt="bag">
            </div>
          
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Product photo
              </label>
              <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                    aria-hidden="true">
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" @change="onImageChange" type="file" accept="image/*" class="sr-only">
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG up to 1MB
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script lang="ts">
  import {
    toRefs,
    reactive,
    defineComponent
  } from 'vue'

  import {
    useApiWithAuth
  } from "../../utils/api";

  import {
    useRouter
  } from "vue-router"

  // @ts-ignore
  import FormValidation from './../FormValidation.vue'

  import {
    ProductPayload
  } from '@/interfaces/interfaces';

  import { useToast } from "vue-toastification";

  export default defineComponent({
    name: 'AddProduct',
    components: {
      FormValidation,
    },

    setup() {

     const toast = useToast();

      let image: any;

      const payload = reactive < ProductPayload > ({
        title: "",
        description: "",
        price: "",
        image: false,
      });

      const {
        loading,
        post,
        errorMessage,
        errorDetails,
        errorFields,
      } = useApiWithAuth("/api/v1/products");

      const router = useRouter()

      const addProduct = () => {
        // console.log(payload);
        post(payload).then((res) => {
          // console.log(res)
           toast.success(res.msg);
          router.push({
            name: "ProductList"
          });
        });
      };

      const onImageChange = (e: any) => {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        payload.image = files[0]
        createImage(files[0]);
      };

      const createImage = (file: any) => {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          payload['image'] = e.target.result;
        };
        reader.readAsDataURL(file);
      };

      return {
        ...toRefs(payload),
        addProduct,
        loading,
        errorMessage,
        errorFields,
        errorDetails,
        onImageChange
      };

    }
  })
</script>