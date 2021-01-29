import { createWebHistory, createRouter } from "vue-router";

import { useAuth } from './../utils/auth'

import { useToast } from "vue-toastification";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ './../components/Home.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import(/* webpackChunkName: "Signin" */ './../components/SignIn.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import(/* webpackChunkName: "Signup" */ './../components/SignUp.vue'),
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
    component: () => import(/* webpackChunkName: "Addproduct" */ './../components/product/Add.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: "/product-list",
    name: "ProductList",
    component: () => import(/* webpackChunkName: "ProductList" */ './../components/product/List.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/product/:id',
    name: 'product.view',
    component: () => import(/* webpackChunkName: "product.view" */ './../components/product/Edit.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchAll(.*)",
    component: () => import(/* webpackChunkName: "NotFound" */ './../components/errors/NotFound.vue'),
    
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