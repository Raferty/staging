<template>
  <section class="modal-form">
    <div class="modal-form__shadow" @click="$emit('close')"></div>

    <div class="modal-form__container">
      <IconClose class="modal-form__close" @click="$emit('close')" />
      <div class="modal-form__title">Login</div>
      <form @submit.prevent="handleForm">
        <div class="modal-form__row">
          <UiInput label="username" v-model="formData.username" size="large" />
        </div>
        <div class="modal-form__row">
          <UiInput label="password" v-model="formData.password" size="large" />
        </div>
        <div class="modal-form__row">
          <UiButton block size="large" @click="$emit('submit', formData)"
            >Login</UiButton
          >
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(["close", "submit"]);

const formData = reactive({
  username: "mor_2314",
  password: "83r5^_",
});
</script>

<style lang="scss" scoped>
.modal-form {
  position: fixed;
  inset: 0;

  &__row {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 32px;
  }

  &__shadow {
    background-color: rgba(#000000, 0.5);
    position: absolute;
    inset: 0;
  }

  &__container {
    width: fit-content;
    background-color: #fff;
    padding: 24px 60px 80px;
    border-radius: 8px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__close {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
  }
}
</style>