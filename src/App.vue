<template>
  <div class="app flex column">
    <app-header />
    <router-view class="main" />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "./cmps/AppFooter.vue";
import AppHeader from "./cmps/AppHeader";

export default {
  components: {
    AppHeader,
    AppFooter,
  },

  created() {
    console.clear();
  },
};
</script>