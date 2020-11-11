<template>
  <div class="main-container">
    <div class="filter flex align-center">
      <h3>Find me a book:</h3>
      <input v-model="filterBy.name" @input="setFilter" type="search" />
      <h3>Min Price:</h3>
      <span>{{ filterBy.minPrice }}</span>
      <input
        type="range"
        name="min"
        :min="min"
        :max="max"
        v-model.number="filterBy.minPrice"
        @input="checkRange"
        @change="setFilter"
      />
      <h3>Max Price:</h3>
      <span>{{ filterBy.maxPrice }}</span>
      <input
        type="range"
        name="max"
        :min="min"
        :max="max"
        v-model.number="filterBy.maxPrice"
        @input="checkRange"
        @change="setFilter"
      />
      <button @click="clearFilters">Clear filters</button>
    </div>
  </div>
</template>

<script>
import bookService from "../services/bookService";

export default {
  async created() {
    const priceRange = await bookService.getPriceRange();
    this.filterBy.minPrice = this.min = priceRange.min;
    this.filterBy.maxPrice = this.max = priceRange.max;
    // this.min = priceRange.min;
    // this.max = priceRange.max;
  },

  data() {
    return {
      min: undefined,
      max: undefined,
      filterBy: {
        name: "",
        minPrice: 0,
        maxPrice: undefined,
      },
    };
  },

  methods: {
    clearFilters() {
      this.filterBy.name = "";
      this.filterBy.minPrice = this.min;
      this.filterBy.maxPrice = this.max;
      this.setFilter();
    },

    setFilter() {
      this.$emit("filtered", this.filterBy);
    },

    checkRange(ev) {
      const value = parseInt(ev.target.value);
      if (ev.target.name === "min" && value > this.filterBy.maxPrice)
        this.filterBy.maxPrice = value;
      if (ev.target.name === "max" && value < this.filterBy.minPrice)
        this.filterBy.minPrice = value;
    },
  },
};
</script>