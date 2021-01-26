import { createWebHistory, createRouter } from "vue-router";
import Home from "./../components/home.vue";
import Signin from "./../components/sign-in.vue";
import Signup from "./../components/sign-up.vue";

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
  },
  {
    path: "/signus",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;