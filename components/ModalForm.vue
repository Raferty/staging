<template>
  <button @click="open = true">
          <UiTitle tag="h2">Add User</UiTitle></button>

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
          <UiTitle tag="h2">Add User</UiTitle>
        </div>
        <div class="add-user__form__fields">
          <div>
            <label for="username"><UiLabel tag="h6">username</UiLabel></label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label for="Email"><UiLabel tag="h6">Email</UiLabel></label>
            <input type="text" name="Email" id="Email" />
          </div>
          <div>
            <label for="Password"><UiLabel tag="h6">Password</UiLabel></label>
            <input type="text" name="Password" id="Password" />
          </div>
          <div>
            <label for="RepeatPassword"></label>
            <UiLabel tag="h6">RepeatPassword</UiLabel>
            <input type="text" name="RepeatPassword" id="RepeatPassword" />
          </div>
          <div>
            <button type="submit"><UiTitle tag="h3">Add</UiTitle></button>
          </div>
        </div>
      </form>
    </div>
  </Teleport>
</template>

<script setup>
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
      button {
        margin-bottom: 5rem;
      }
    }
  }
}
</style>
