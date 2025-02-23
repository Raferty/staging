<template>
  <div class="ui-input">
    <label for="proce_from" class="ui-input__label">{{ label }}</label>
    <input
      v-model="localValue"
      type="text"
      class="ui-input__input"
      :class="classes"
    />
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
      return ["medium", "large"].indexOf(value) !== -1;
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

const classes = computed(() => ({
  [`block`]: props.block,
  [`s-${props.size}`]: true,
}));
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
    border-radius: 4px;
    border: 1px solid #000;
    padding: 0 12px;

    &.s-medium {
      font-size: 18px;
      height: 38px;
    }

    &.s-large {
      font-size: 22px;
      height: 48px;
    }

    &.block {
      width: 100%;
    }
  }
}
</style>
