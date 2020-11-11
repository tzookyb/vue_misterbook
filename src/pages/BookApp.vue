<template>
  <section class="book-app">
    <BookFilter @filtered="setFilter" />
    <BookList :books="booksToShow" @selected="onSelectBook" />
    <BookDetails
      v-if="selected"
      :book="getSelectedBook"
      @selected="onSelectBook"
    />
  </section>
</template>

<script>
import bookService from "../services/bookService";
import BookFilter from "../cmps/BookFilter";
import BookList from "../cmps/BookList";
import BookDetails from "../cmps/BookDetails";

export default {
  data() {
    return {
      books: [],
      filterBy: null,
      selected: null,
    };
  },
  async created() {
    this.books = await bookService.query();
  },

  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books;
      else
        return this.books.filter(
          (book) =>
            book.title.toLowerCase().includes(this.filterBy.name) &&
            book.listPrice.amount > this.filterBy.minPrice &&
            book.listPrice.amount < this.filterBy.maxPrice
        );
    },

    getSelectedBook() {
      if (!this.selected) return null;
      const [book] = this.books.filter((book) => book.id === this.selected);
      return book;
    },
  },

  methods: {
    onSelectBook(bookId) {
      this.selected = bookId;
    },

    setFilter(ev) {
      this.filterBy = {
        name: ev.name.toLowerCase(),
        minPrice: ev.minPrice,
        maxPrice: ev.maxPrice,
      };
    },
  },

  components: {
    BookFilter,
    BookList,
    BookDetails,
  },
};
</script>