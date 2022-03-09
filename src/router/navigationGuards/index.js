import store from "../../store";
const guards = {
  requiresAuth: requiresAuth,
};
export function requiresAuth(to) {
  const requiresAuth = to.meta.requiresAuth;
  if (typeof requiresAuth === "boolean") {
    if (requiresAuth) {
      return !!store.getters.isLogin ?? { name: "profile" };
    } else {
      return !store.getters.isLogin ?? { path: "/main" };
    }
  } else return true;
}

export function guardMaster(to, from) {
  let next = true;
  for (const guard of Object.values(guards)) {
    const res = guard(to, from);
    if (res !== true) {
      next = res;
      break;
    }
  }
  return next;
}
