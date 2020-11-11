<template>
  <section class="main-container">
    <div class="book-list">
      <BookPreview
        v-for="book in books"
        :key="book.id"
        :book="book"
        @click.native="$emit('selected', book.id)"
      />
    </div>
  </section>
</template>

<script>
import BookPreview from "../cmps/BookPreview";

export default {
  props: {
    books: Array,
  },

  components: {
    BookPreview,
  },
};
</script>