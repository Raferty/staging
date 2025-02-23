<template>
  <header class="header">
    <div class="header__container l-default">
      <Logo />
      <NavigationMenu />

      <div id="sasasas" class="header__actions">
        <UiButton v-if="authStore.isAuth" @click="navigateTo('/admin/')"
          >Amin panel</UiButton
        >
        <UiButton v-else @click="open = !open">Login</UiButton>
      </div>
    </div>
  </header>
  <ModalForm v-if="open" @close="handleClose" @submit="handleForm" />
</template>

<script setup>
import { EToast } from "vue3-modern-toast";
import { useAuthStore } from "./store/auth";

const { $toast } = useNuxtApp();

const authStore = useAuthStore();

const open = ref(false);

const handleClose = () => {
  open.value = false;

  $toast.show({
    message: "Авторизация прошла успешно",
    type: EToast.SUCCESS,
    duration: 5000,
    dismissible: true,
    icon: "✨",
  });
};

const handleForm = (event) => {
  $fetch(`https://fakestoreapi.com/auth/login`, {
    method: "POST",
    body: JSON.stringify(event),
  })
    .then((res) => {
      authStore.updateToken(res.token);

      console.log("res", res);

      if (res.token) {
        localStorage.setItem("userData", JSON.stringify(event));
      }
    })
    .finally(() => (open.value = false));
};
</script>

<style lang="scss" scoped>
.header {
  height: 46px;
  padding: 8px 0;
  margin-bottom: 32px;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__actions {
    display: flex;
    gap: 8px;
  }
}
</style>
