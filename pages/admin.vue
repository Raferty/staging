<template>
    <div>for admin</div>
    <AddUser/>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: ["is-auth"],
  });
  </script>
  
  <style lang="scss" scoped></style>