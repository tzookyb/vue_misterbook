<template>
  <span>{{ price }}</span>
</template>

<script>
export default {
  props: {
    itemPrice: Object,
  },

  computed: {
    price() {
      const { currencyCode } = this.itemPrice;
      let format;
      if (currencyCode === "EUR")
        format = {
          code: "en-GB",
          form: { style: "currency", currency: "EUR" },
        };
      else if (currencyCode === "USD")
        format = {
          code: "en-US",
          form: { style: "currency", currency: "USD" },
        };
      else if (currencyCode === "ILS")
        format = {
          code: "he-IL",
          form: { style: "currency", currency: "ILS" },
        };

      let price = new Intl.NumberFormat(format.code, format.form);
      return price.format(this.itemPrice.amount);
    },
  },
};
</script>