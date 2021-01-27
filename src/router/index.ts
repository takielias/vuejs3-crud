import { createWebHistory, createRouter } from "vue-router";

import NotFound from "./../components/errors/NotFound.vue";

import notificationService from '../notificationService'

import { useAuth } from '../utils/auth'

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "signout" */ '../components/Home.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import(/* webpackChunkName: "signout" */ '../components/Signin.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import(/* webpackChunkName: "signout" */ '../components/Signup.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/signout',
    name: 'signout',
    component: () => import(/* webpackChunkName: "signout" */ '../components/Signout.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: "/add-product",
    name: "Addproduct",
    component: () => import(/* webpackChunkName: "signout" */ '../components/product/Add.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: "/product-list",
    name: "ProductList",
    component: () => import(/* webpackChunkName: "signout" */ '../components/product/List.vue'),
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

  // Not logged into a guarded route?
  if ( authenticating.value === false && to.meta.requiresAuth === true && !user?.value ) {
    console.log('requires auth, redirect to login');
    notificationService.notify({type:'error', title:'Error', message:'Please Sign In'})   
    next({ name: 'Signin' })
  }

  // Redirect user to route if they don't have the correct subscription
  // else if ( to.meta.requiresAuth === true && !user?.value?.subscription  && to.name!.toString().startsWith('subscribe') === false ) {
  //   console.log('requires valid subscription, redirect to subscribe');
  //   next({ name: 'subscribe' })
  // }

  // Logged in for an auth route
  // else if ( (to.name == 'login' || to.name == 'register') && user!.value ) {
  //   console.log('login or register, has a user so send home');

  //   next({ name: 'home' })
  // }

  // Carry On...
  else next()
})


export default router;