<template>
  <section class="modal-form">
    <div class="modal-form__shadow" @click="$emit('close')"></div>

    <div class="modal-form__container">
      <IconClose class="modal-form__close" @click="$emit('close')" />

      <div class="modal-form__title">
        <slot name="form-title"> Login </slot>
      </div>

      <form @submit.prevent="handleForm">
        <slot>
          <UiInput label="username" v-model="formData.username" size="large" />
          <UiInput label="password" v-model="formData.password" size="large" />
        </slot>
        <div class="modal-form__row">
          <slot name="form-actions" :submit="formSubmit">
            <UiButton block size="large" @click="formSubmit(formData)"
              >Login</UiButton
            >
          </slot>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useAuthStore } from "./store/auth";
const emit = defineEmits(["close", "submit"]);

const authStore = useAuthStore();

const props = defineProps({
  url: {
    type: String,
    default: "auth/login",
  },
});

const formData = reactive({
  username: "mor_2314",
  password: "83r5^_",
});

const formSubmit = (event) => {
  $fetch(`https://fakestoreapi.com/${props.url}`, {
    method: "POST",
    body: JSON.stringify(event),
  }).then((res) => {
    authStore.updateToken(res.token);
    localStorage.user = JSON.stringify(res);
    emit("close");
  });
};
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
