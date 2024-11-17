<template>
  <button class="modal__open" @click="open = true">
    <UiTitle tag="h2">{{ form.title }}</UiTitle>
  </button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div class="modal__shadow" @mousedown="open = false"></div>
      <form class="modal__form" @submit.prevent="$emit('sendForm', formData)">
        <button class="modal__form__close" type="button" @click="open = false">
          <svg viewBox="0 0 24 24" width="24" height="24" class="icon">
            <use href="public\icons.svg#close"></use>
          </svg>
        </button>
        <div class="modal__form__title">
          <UiTitle tag="h2">{{ form.title }}</UiTitle>
        </div>
        <div class="modal__form__fields" v-for="field in form.fields">
          <div>
            <label :for="field.id"
              ><UiLabel tag="h6">{{ field.name }}</UiLabel></label
            >
            <input
              v-model="formData[field.id]"
              :type="field.type"
              :name="field.name"
              :id="field.id"
              :placeholder="field.placeholder"
              :required="field.required"
            />
            {{ formData[field.id] }}
          </div>
        </div>
        <div>
          <button class="modal__form__submit" type="submit">
            <UiTitle tag="h3">{{ form.button }}</UiTitle>
          </button>
        </div>
      </form>
    </div>
  </Teleport>
</template>

<script setup>
const emits = defineEmits(["sendForm"]);
const open = ref(false);
const props = defineProps({
  form: {
    title: String,
    button: String,
    fields: {
      type: String,
      name: String,
      id: String,
      placeholder: String,
      required: Boolean,
    },
  },
});
const formData = ref({});
</script>

<style lang="scss">
button {
  border-radius: 4px;
  height: 48px;
  cursor: pointer;
  color: white;
  background-color: black;
}
.modal {
  position: fixed;
  inset: 0;
  &__shadow {
    background-color: rgba(#000000, 0.5);
    position: absolute;
    inset: 0;
  }
  &__form {
    position: relative;
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
    &__close {
      position: absolute;
      height: 24px;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: none;
      background: none;
      top: 12px;
      right: 12px;
    }
    &__title {
      display: flex;
      justify-content: center;
    }
    &__fields div {
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
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 5rem;
    }
  }
}
</style>
