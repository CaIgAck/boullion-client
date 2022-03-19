import store from "../../store";
const guards = {
  requiresAuth: requiresAuth,
};
export function requiresAuth(to) {
  const requiresAuth = to.meta.requiresAuth;
  if (typeof requiresAuth === "boolean") {
    if (requiresAuth) {
      console.log(store.getters.isLogin);
      return store.getters.isLogin || { name: "Main" };
    } else {
      console.log(store.getters.isLogin);
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
