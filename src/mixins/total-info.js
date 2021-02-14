export default {
  computed: {
    totalCount() {
      return this.items.reduce((memo, item) => {
        memo += item.count;
        return memo;
      }, 0);
    },
    totalWeight() {
      return Math.ceil(this.calculateTotal('weight'));
    },
    totalWeightFull() {
      return this.totalWeight * this.giftsCount;
    },
    totalPrice() {
      return Math.ceil(this.calculateTotal('price') + this.packagePrice);
    },
    totalPriceFull() {
      return this.totalPrice * this.giftsCount;
    },
  },
  methods: {
    calculateTotal(field) {
      return this.items.reduce((memo, item) => {
        memo += Number(item[field]) * item.count;
        return memo;
      }, 0);
    },
  },
}