import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(async () => {
  const storeAuth = useAuthStore();

  const userData = localStorage.getItem("userData");

  if (userData && Object.keys(userData).length > 0) {
    $fetch(`https://fakestoreapi.com/auth/login`, {
      method: "POST",
      body: userData,
    }).then((res) => {
      storeAuth.updateToken(res.token);
    });
  }
});
