<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discountPercent }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "Discount",
  data() {
    return {
      discountPercent: 30,
    };
  },
  mounted() {
      setInterval(() => {
          this.discountPercent = this.discountPercent == 0 ? 0 : this.discountPercent - 1;
      }, 1000);
  },
};
</script>

<style>
</style>