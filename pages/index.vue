<template>
  <NuxtLayout>
    <ModalForm url="users">
      <template #form-title> Регистрация </template>

      <template #form-actions="{ submit }">
        <UiButton block size="large" @click="submit(formData)">Login</UiButton>
      </template>

      <UiInput label="username" v-model="formData.username" size="large" />
      <UiInput label="password" v-model="formData.password" size="large" />
      <UiInput label="email" v-model="formData.email" size="large" />
      <UiInput
        label="firstname"
        v-model="formData.name.firstname"
        size="large"
      />
      <UiInput label="lastname" v-model="formData.name.lastname" size="large" />
      <UiInput label="address" v-model="formData.address.city" size="large" />
      <UiInput label="address" v-model="formData.address.street" size="large" />
      <UiInput label="address" v-model="formData.address.number" size="large" />
      <UiInput
        label="address"
        v-model="formData.address.zipcode"
        size="large"
      />
      <UiInput
        label="address"
        v-model="formData.address.geolocation.lat"
        size="large"
      />
      <UiInput
        label="address"
        v-model="formData.address.geolocation.long"
        size="large"
      />
    </ModalForm>
  </NuxtLayout>
</template>

<script setup>
const formData = ref({
  email: "John@gmail.com",
  username: "johnd",
  password: "m38rmF$",
  name: {
    firstname: "John",
    lastname: "Doe",
  },
  address: {
    city: "kilcoole",
    street: "7835 new road",
    number: 3,
    zipcode: "12926-3874",
    geolocation: {
      lat: "-37.3159",
      long: "81.1496",
    },
  },
});

// const handleSubmit = () => {
//   $fetch(`https://fakestoreapi.com/users`, {
//     method: "POST",
//     body: JSON.stringify(formData.value),
//   });
// };

definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss"></style>
