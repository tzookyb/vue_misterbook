<template>
  <section class="about main-container">
    <div class="about-details flex column grow">
      <h1>Say goodbye to your librarian!</h1>
      <ul>
        <li>
          MisterBook promises to deliver the best available books on the market
        </li>
        <li>Fast 1-business day delivery straight to your home</li>
        <li>Best customer service - with no competition!</li>
        <li>
          Lowest price guaranteed, found it cheaper? we'll match it.
          <small>(t&c apply)</small>
        </li>
      </ul>
      <small class="tnc"
        >Terms & Conditions: we actually lie, we won't match it, don't bother
        trying.</small
      >
    </div>
    <transition name="peek">
      <img v-if="libraShown" src="@/assets/img/libra.png" />
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      libraShown: false,
    };
  },
  created() {
    setInterval(() => (this.libraShown = !this.libraShown), 3000);
  },
};
</script>

<style>
</style>