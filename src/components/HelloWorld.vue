<template>
  <cv-button @click="onClick">Hello @carbon/vue</cv-button>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    onClick() {
      alert('Hello @carbon/vue');
    }
  }
};
</script>
