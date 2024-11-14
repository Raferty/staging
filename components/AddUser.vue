<template>
  <ModalForm :form="addUser" @send-form="submitForm" />
</template>

<script setup>
const isValid = ref(false);
const submitForm = async (formData) => {
  console.log("formData :>> ", formData);
  isValid.value = useValidationForm(formData);

  if (isValid.value !== true) return alert(isValid.value);
  const users = await $fetch(`https://fakestoreapi.com/users`, {
    method: "POST",
    body: JSON.stringify(formData),
  });
  console.log("users :>> ", users);
  alert(`User ID=${users.id} added!`)
};

const addUser = {
  title: "Add user",
  button: "Add",
  fields: [
    {
      id: "username",
      name: "Username",
      type: "text",
      placeholder: "A-Za-z0-9!#$%&'*+/=?^_`{|}~-",
      required: true,
    },
    {
      id: "email",
      name: "Email",
      type: "text",
      placeholder: "user@example.com",
      required: false,
    },
    {
      id: "phone",
      name: "Phone",
      type: "text",
      placeholder: "+7(900)123-45-67",
      required: false,
    },
    {
      id: "password",
      name: "Password",
      type: "password",
      placeholder: "A-Za-z0-9!#$%&'*+/=?^_`{|}~-",
      required: true,
    },
    {
      id: "repeat_password",
      name: "Repeat password",
      type: "password",
      placeholder: "",
      required: true,
    },
  ],
};
</script>
<style lang="scss">
</style>
