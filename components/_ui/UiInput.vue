<template>
  <div class="ui-input">
    <label for="proce_from" class="ui-input__label">{{ label }}</label>
    <input v-model="localValue" type="text" class="ui-input__input" />
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },

  modelValue: {
    type: [Number, String],
    default: "",
  },
  size: {
    type: String,
    validator(value) {
      return ["large", "medium"].indexOf(value) !== -1;
    },
    default: "medium",
  },
});

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>

<style lang="scss" scoped>
.ui-input {
  &__label {
    display: block;
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 4px;
  }

  &__input {
    height: 36px;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 0 12px;
  }
}
</style>
