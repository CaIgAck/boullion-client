import Vue from "vue";
import VueRouter from "vue-router";
import { guardMaster } from "./navigationGuards";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/profile/ProfilePage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/auth/LoginPage.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/main",
    name: "Main",
    component: () =>
      import("../views/auth/MainQuestionPage.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/registration-step-one",
    name: "registration-step-one",
    component: () =>
      import(
        "../views/auth/RegistrationFormSteps/RegistrationStepOnePage.vue"
    ),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/registration-step-two",
    name: "registration-step-two",
    component: () =>
      import(
        "../views/auth/RegistrationFormSteps/RegistrationStepTwoPage.vue"
      ),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/registration-step-tree",
    name: "registration-step-tree",
    component: () =>
      import(
        "../views/auth/RegistrationFormSteps/RegistrationStepTreePage.vue"
      ),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/Survey",
    name: "survey",
    component: () =>
      import("../views/auth/SurveyPage.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import("../views/profile/ProfilePage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/users",
    name: "users",
    component: () =>
      import("../views/users/UsersPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/orders",
    name: "orders",
    component: () =>
      import("../views/orders/OrdersPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/meal-plan",
    name: "MealPlan",
    component: () =>
      import("../views/MealPlan/MealPlanPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () =>
      import(
        "../views/favorites/FavoritesPage.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/receipt/:id",
    name: "Receipt",
    component: () =>
      import(
        "../views/receipt/ReceiptDetailsPage.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/create-receipt",
    name: "CreateReceipt",
    component: () =>
      import(
        "../views/receipt/ReceiptCreatePage.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const guardResult = guardMaster(to, from);
  if (guardResult === true) {
    next();
  } else {
    next(guardResult);
  }
});

export default router;
