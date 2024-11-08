<template>
  <ModalForm :form="login" />
  <ModalForm :form="addUser" />
</template>

<script setup>
const login = {
  title: "Login",
  button: "Sign in",
  fields: [
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
