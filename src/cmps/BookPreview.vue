<template>
  <div class="book-card">
    <img
      v-if="book.listPrice.isOnSale"
      class="sale-sign"
      src="../assets/img/sale.png"
    />
    <img class="book-img" :src="book.thumbnail" />
    <div class="card-txt flex align-center space-between">
      <h2><capitalize :txt="book.title" /></h2>
      <h3><price :itemPrice="book.listPrice" /></h3>
    </div>
  </div>
</template>

<script>
import Capitalize from "./Capitalize.vue";
import Price from "./Price.vue";
export default {
  components: { Price, Capitalize },
  props: {
    book: Object,
  },
};
</script>