<template>
  <section>
    <div class="modal-container main-container">
      <div class="details-container flex align-center justify-center">
        <img :src="book.thumbnail" />
        <div class="details flex column">
          <table>
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{{ book.id }}</td>
              </tr>
              <tr>
                <td>Title:</td>
                <td><capitalize :txt="book.title" /></td>
              </tr>
              <tr>
                <td>Subtitle:</td>
                <td><capitalize :txt="book.subtitle" /></td>
              </tr>
              <tr>
                <td>Authors:</td>
                <td>
                  <span v-for="author in book.authors" :key="author">{{
                    author + " "
                  }}</span>
                </td>
              </tr>
              <tr>
                <td>Published Date:</td>
                <td>{{ published }}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td><LongText :text="book.description" :maxChar="100" /></td>
              </tr>
              <tr>
                <td>Page Count:</td>
                <td>{{ readingLength }}</td>
              </tr>
              <tr>
                <td>Categories:</td>
                <td>
                  <span v-for="category in book.categories" :key="category">{{
                    category + " "
                  }}</span>
                </td>
              </tr>
              <tr>
                <td>List Price:</td>
                <td>
                  <price :class="priceClass" :itemPrice="book.listPrice" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button @click="$emit('selected', null)">Close Details</button>
      </div>
    </div>
  </section>
</template>

<script>
import Capitalize from "./Capitalize.vue";
import Price from "./Price.vue";
import LongText from "./LongText.vue";
export default {
  components: { LongText, Price, Capitalize },

  props: {
    book: Object,
  },

  computed: {
    readingLength() {
      const { pageCount } = this.book;
      let readlength;
      if (pageCount > 500) readlength = " - Long reading";
      else if (pageCount > 200) readlength = " - Decent reading";
      else if (pageCount < 100) readlength = " - Light reading";
      else readlength = "";
      return pageCount + readlength;
    },

    published() {
      const thisYear = new Date().getFullYear();
      const publishedYear = this.book.publishedDate;

      let publishedTxt;
      if (thisYear - publishedYear > 10)
        publishedTxt = publishedYear + " - Veteran Book";
      else if (thisYear - publishedYear < 1)
        publishedTxt = publishedYear + " - New!";
      else publishedTxt = publishedYear;
      return publishedTxt;
    },

    priceClass() {
      const bookPrice = this.book.listPrice.amount;
      if (bookPrice > 150) return "red-price";
      if (bookPrice < 20) return "green-price";
      return "";
    },
  },
};
</script>