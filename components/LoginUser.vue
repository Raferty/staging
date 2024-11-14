<template>
  <ModalForm :form="login" @send-form="submitForm" />
</template>

<script setup>
import { useAuthStore } from "./store/auth";

const authStore = useAuthStore();
const isValid = ref(false)
const submitForm = async (formData) => {
  console.log('formData :>> ', formData);
  isValid.value = useValidationForm(formData);

  if (isValid.value !== true) return alert(isValid.value);
  await $fetch(
    `https://fakestoreapi.com/auth/login`,
    {
      method: "POST",
      body: JSON.stringify(formData),
    }
  ).then((res) => {
      authStore.updateToken(res.token);
    })
};
const login = {
  title: "Login",
  button: "Sign in",
  fields: [
    {
      id: "username",
      name: "username",
      type: "text",
      placeholder: "user@example.com",
      required: true,
    },
    {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "",
      required: true,
    },
  ],
};
</script>
