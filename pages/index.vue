<template>
  <Form @send-form="submitForm" >
    <template #form-title>
      <h1 align="center">Авторизация</h1>
    </template>
  </Form>
</template>

<script setup>

const isValid = ref(false);
const submitForm = async (formData) => {
  console.log('formData :>> ', formData);
  isValid.value = useValidationForm(formData);

  if (isValid.value !== true) return alert(isValid.value);

  await $fetch(`https://fakestoreapi.com/auth/login`, {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((res) => {
      authStore.updateToken(res.token);
      localStorage.user = JSON.stringify(res);
    });
};
</script>

<style lang="scss"></style>
