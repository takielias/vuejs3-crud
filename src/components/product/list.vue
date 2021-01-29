<template>
    <!-- This example requires Tailwind CSS v2.0+ -->

    <div class="flex flex-col">

        <div class="py-3 right-0 text-right">
                <router-link class="ml-8 inline-block px-3 py-2 text-xs font-small text-center text-pink-500 uppercase transition bg-transparent border-2 border-pink-500 rounded ripple hover:bg-pink-100 focus:outline-none waves-effect" to="/add-product">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </router-link>
        </div>

        <loading v-if="loading" />

        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <span>Action</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">

                            <tr v-for="product in items" :key="product.id">
                                <td class="px-6 py-3 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10">
                                            <img class="h-10 w-10 rounded-full" :src="product.image" alt="">
                                        </div>
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900">
                                                {{product.title}}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span
                                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {{product.price}}
                                    </span>
                                </td>
                                <td class="py-6 px-5 flex justify-end">

                                    <router-link :to="{ name: 'product.view', params: { id: product.id }}"
                                        class="text-indigo-600 hover:text-indigo-900">

                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                                            </path>
                                        </svg>

                                    </router-link>

                                    <a href="#" class="text-indigo-600 hover:text-indigo-900 pl-3"
                                        v-on:click="deleteProduct(product.id)">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                            </path>
                                        </svg>
                                    </a>

                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import {
        toRefs,
        defineComponent,
        reactive
    } from 'vue'

    import {
        useAuth
    } from "./../../utils/auth";

    import {
        useApiWithAuth
    } from "../../utils/api";

    import { useToast } from "vue-toastification";

    export default defineComponent({
        name: 'List',
        setup() {
                 const toast = useToast();
            const payload = reactive({
                items: [],
            });
            const {
                user
            } = useAuth()
            const {
                loading,
                data,
                error,
                get
            } = useApiWithAuth("/api/v1/products");

            get()
                .then(res => {
                    payload.items = res
                });

            const deleteProduct = (id: number) => {
                const {
                    del,
                } = useApiWithAuth(`/api/v1/products/${id}`);
                if (confirm('are you sure?')) {
                    del().then(
                        (res) => {
                            const indetx = payload.items.findIndex(p => p.id === id)
                            payload.items.splice(indetx, 1)
                            toast.success(res.msg)
                        }
                    );
                }
            };

            return {
                ...toRefs(payload),
                loading,
                data,
                deleteProduct
            };
        },
    });
</script>