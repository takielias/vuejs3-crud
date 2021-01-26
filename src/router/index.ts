import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Signin from "../components/SignIn.vue";
import Signup from "../components/SignUp.vue";
import NotFound from "./../components/errors/NotFound.vue";

import AddProduct from "../components/product/Add.vue";

import { useAuth } from '../utils/auth'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
    meta: { requiresAuth: false },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: { requiresAuth: false },
  },
  {
    path: '/signout',
    name: 'signout',
    component: () => import(/* webpackChunkName: "logout" */ '../components/Signout.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: "/add-product",
    name: "Addproduct",
    component: AddProduct,
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