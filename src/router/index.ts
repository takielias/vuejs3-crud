import { createWebHistory, createRouter } from "vue-router";

import NotFound from "./../components/errors/NotFound.vue";

import { useAuth } from './../utils/auth'

import { useToast } from "vue-toastification";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "signout" */ './../components/Home.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import(/* webpackChunkName: "signout" */ './../components/Signin.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import(/* webpackChunkName: "signout" */ './../components/Signup.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/signout',
    name: 'signout',
    component: () => import(/* webpackChunkName: "signout" */ './../components/SignOut.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: "/add-product",
    name: "Addproduct",
    component: () => import(/* webpackChunkName: "signout" */ './../components/product/Add.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: "/product-list",
    name: "ProductList",
    component: () => import(/* webpackChunkName: "signout" */ './../components/product/List.vue'),
    meta: { requiresAuth: true },
  },

  {
    path: '/product/:id',
    name: 'product.view',
    component: () => import(/* webpackChunkName: "genres.view" */ './../components/product/Edit.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { authenticating, user } = useAuth()

  // Auth Guard
  if ( authenticating.value === false && to.meta.requiresAuth === true && !user?.value ) {
    const toast = useToast();
    toast.error('Please Sign In')
    next({ name: 'Signin' })
  }
  else next()
})


export default router;