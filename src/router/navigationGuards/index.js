import store from "../../store";
const guards = {
  requiresAuth: requiresAuth,
};
// eslint-disable-next-line no-unused-vars
export function requiresAuth(to, from) {
  const requiresAuth = to.meta.requiresAuth;
  if (typeof requiresAuth === "boolean") {
    if (requiresAuth) {
      return store.getters.isLogin || { name: "Login" };
    } else {
      return !store.getters.isLogin || { path: "/" };
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
