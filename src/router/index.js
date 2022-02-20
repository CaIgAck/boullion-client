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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/LoginPage"),
  },
  {
    path: "/main",
    name: "Main",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/MainQuestionPage"),
  },
  {
    path: "/registration-step-one",
    name: "registration-step-one",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/auth/RegistrationFormSteps/RegistrationStepOnePage"
      ),
  },
  {
    path: "/registration-step-two",
    name: "registration-step-two",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/auth/RegistrationFormSteps/RegistrationStepTwoPage"
      ),
  },
  {
    path: "/registration-step-tree",
    name: "registration-step-tree",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/auth/RegistrationFormSteps/RegistrationStepTreePage"
      ),
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
