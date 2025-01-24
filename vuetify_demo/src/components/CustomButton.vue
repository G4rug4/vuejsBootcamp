<template>
    <v-btn :color="color" :outlined="outlined" :disabled="disabled" @click="handleClick">
      {{ label }}
    </v-btn>
  </template>
  
  <script>
  export default {
    name: 'CustomButton',
    props: {
      label: {
        type: String,
        default: 'Click Me',
      },
      color: {
        type: String,
        default: 'primary',
      },
      outlined: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      handleClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped>
  .v-btn {
    font-size: 16px;
    font-weight: bold;
  }
  </style>
  