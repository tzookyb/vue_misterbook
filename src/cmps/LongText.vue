<template>
  <span>
    <span class="text"><capitalize :txt="modifiedText" /></span>
    <span class="more" @click.stop="toggleIsOpen">{{ moreText }}</span>
  </span>
</template>

<script>
import Capitalize from "./Capitalize.vue";
export default {
  components: { Capitalize },
  data() {
    return {
      isOpen: false,
    };
  },

  props: {
    text: String,
    maxChar: Number,
  },

  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    },
  },

  computed: {
    modifiedText() {
      return this.isOpen
        ? this.text
        : this.text.substr(0, this.maxChar - 1) + "...";
    },

    moreText() {
      return this.isOpen ? " less" : " more";
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
}
.more {
  cursor: pointer;
  color: blue;
}
</style>