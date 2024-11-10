<template>
  <ModalForm v-if="!authorizedUser" :form="login" v-model:auth="authorizedUser" />
  <ModalForm v-if="authorizedUser" :form="addUser" />
</template>

<script setup>
const authorizedUser = ref(false);
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
const addUser = {
  title: "Add user",
  button: "Add",
  fields: [
    {
      id: "username",
      name: "username",
      type: "text",
      placeholder: "",
      required: false,
    },
    {
      id: "Email",
      name: "Email",
      type: "text",
      placeholder: "user@example.com",
      required: true,
    },
    {
      id: "Password",
      name: "Password",
      type: "password",
      placeholder: "",
      required: true,
    },
    {
      id: "Repeat password",
      name: "Repeat password",
      type: "password",
      placeholder: "",
      required: true,
    },
  ],
};
</script>

<style lang="scss"></style>
