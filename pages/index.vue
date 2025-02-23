<template>
  <NuxtLayout> index Page </NuxtLayout>
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
