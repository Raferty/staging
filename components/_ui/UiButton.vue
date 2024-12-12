<template>
    <button class="ui-button" :class="classes">
      <slot />
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    block: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator(value) {
        return ["medium", "large"].indexOf(value) !== -1;
      },
      default: "medium",
    },
  });
  
  const classes = computed(() => ({
    [`block`]: props.block,
    [`s-${props.size}`]: true,
  }));
  </script>
  
  <style lang="scss" scoped>
  .ui-button {
    width: fit-content;
    color: #fff;
    border-radius: 4px;
    background-color: #000;
    border: 1px solid #000;
    cursor: pointer;
    font-weight: 600;
    padding: 8px 12px;
  
    &:active {
      background-color: rgba($color: #000000, $alpha: 0.8);
    }
  
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
  </style>