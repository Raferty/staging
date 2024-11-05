<template>
  <section>
    {{ formData }}<br />
    {{ isValid }}
  </section>
  <section>
    <form @submit="handleForm">
      <div>
        <UiInput label="username" v-model="formData.username" size="medium" />
      </div>
      <div>
        <UiInput label="email" v-model="formData.email" size="large" />
      </div>
      <div>
        <UiInput label="password" v-model="formData.password" size="large" />
      </div>
      <div>
        <UiInput
          label="repeat password"
          v-model="repeatPassword"
          size="large"
        />
      </div>
      <div>
        <button type="submit" class="products-filter__button button">
          Add user
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
const repeatPassword = ref("");

const formData = reactive({
  username: "",
  email: "",
  password: "",
});

const isValid = ref(false);

watch(
  () => repeatPassword.value,
  (newValue, oldValue) => {
    console.log("newValue", newValue);

    isValid.value = formData.password === newValue;
  }
);

const handleForm = async (e) => {
  e.preventDefault();

  if (!isValid.value) return;

  // send data to API from create user
  const { data: answer } = await useFetch(`https://fakestoreapi.com/users`, {
    method: "POST",
    body: JSON.stringify(formData),
  });
};
</script>

<style lang="scss" scoped></style>
