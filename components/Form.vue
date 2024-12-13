<template>
  <form class="modal__form" @submit.prevent="$emit('sendForm', formData)">
    <slot name="form-title">
      <div class="form__title">
        <UiTitle tag="h2">Login</UiTitle>
      </div>
    </slot>
    <slot name="form-content">
      <div class="form__content">
        <div>
          <label for="def_username"><UiLabel tag="h6">login</UiLabel></label>
          <input
            v-model="formData.username"
            id="def_username"
            type="text"
            name="username"
            placeholder="username"
            required="true"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="form__content">
        <div>
          <label for="def_password"><UiLabel tag="h6">password</UiLabel></label>
          <input
            v-model="formData.password"
            id="def_password"
            type="text"
            name="password"
            placeholder=""
            required="true"
            autocomplete="off"
          />
        </div>
      </div>
    </slot>
    <slot name="form-actions">
      <div class="form__submit">
        <button type="submit">
          <UiTitle tag="h3">Отправить</UiTitle>
        </button>
        <button @click="formData = {}">
          <UiTitle tag="h3">Очистить</UiTitle>
        </button>
      </div>
    </slot>
  </form>
</template>

<script setup>
const emits = defineEmits(["sendForm"]);

const formData = ref({});
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 440px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-sizing: border-box;
  box-shadow: 0 0 2px 2px rgba(0, 0, 255, 0.2);
  border-radius: 8px;
  &__title {
    display: flex;
    justify-content: center;
  }
  &__content div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 320px;
    input {
      box-sizing: border-box;
      border-radius: 4px;
      height: 48px;
    }
  }
  &__submit {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
}
</style>
