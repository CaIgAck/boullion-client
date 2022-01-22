import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { guardMaster } from "./navigationGuards";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "defaultLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/login"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const guardResult = guardMaster(to, from);
  if (guardResult === true) {
    next();
  } else {
    console.error("[router guard]", guardResult);
    next(guardResult);
  }
});

export default router;
