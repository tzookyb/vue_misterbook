<template>
  <span>{{ capitalize }}</span>
</template>

<script>
export default {
  props: {
    txt: String,
  },

  computed: {
    capitalize() {
      return this.txt.charAt(0).toUpperCase() + this.txt.slice(1);
    },
  },
};
</script>