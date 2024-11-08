<template>
  <button @click="open = true">
    <UiTitle tag="h2">{{ form.title }}</UiTitle>
  </button>

  <Teleport to="body">
    <div v-if="open" class="add-user">
      <form class="add-user__form" action="">
        <button
          class="add-user__form__close"
          type="button"
          @click="open = false"
        >
          <img src="public/close 1.svg" alt="" srcset="" />
        </button>
        <div class="add-user__form__title">
          <UiTitle tag="h2">{{ form.title }}</UiTitle>
        </div>
        <div class="add-user__form__fields" v-for="field in form.fields">
          <div>
            <label :for="field.id"
              ><UiLabel tag="h6">{{ field.name }}</UiLabel></label
            >
            <input
              :type="field.type"
              :name="field.name"
              :id="field.id"
              :placeholder="field.placeholder"
              :required="field.required"
            />
          </div>
        </div>
        <div>
          <button type="submit"><UiTitle tag="h3">{{ form.button }}</UiTitle></button>
        </div>
      </form>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({form: {
  title: String,
  button: String,
  fields: {},
}});
const open = ref(false);
</script>

<style lang="scss">
button {
  border-radius: 4px;
  margin-top: 1rem;
  height: 48px;
  color: white;
  background-color: black;
}
.add-user {
  position: fixed;
  top: 20%;
  left: 50%;
  margin-left: -220px;
  &__form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 440px;
    height: 528px;
    box-sizing: border-box;
    box-shadow: 0 0 2px 2px rgba(0, 0, 255, 0.2);
    border-radius: 8px;
    &__close {
      position: absolute;
      height: 24px;
      width: 24px;
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
    button[type="submit"] {
      width: 100%;
      margin-bottom: 5rem;
    }
  }
}
</style>
