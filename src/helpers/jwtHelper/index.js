export function saveToken(token) {
  if (token) localStorage.setItem("token", JSON.stringify(token));
}

export function getToken() {
  const strToken = localStorage.getItem("token");
  return strToken ? JSON.parse(strToken) : null;
}

export function removeToken() {
  localStorage.removeItem("token");
}
