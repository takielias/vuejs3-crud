import { createWebHistory, createRouter } from "vue-router";
import Home from "./../components/Home.vue";
import Signin from "../components/SignIn.vue";
import Signup from "../components/SignUp.vue";
import NotFound from "./../components/errors/NotFound.vue";

import AddProduct from "../components/product/Add.vue";

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
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/add-product",
    name: "Addproduct",
    component: AddProduct,
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