import { createWebHistory, createRouter } from "vue-router";
import Home from "./../components/home.vue";
import Signin from "../components/SignIn.vue";
import Signup from "../components/SignUp.vue";
import NotFound from "./../components/NotFound.vue";

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
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;