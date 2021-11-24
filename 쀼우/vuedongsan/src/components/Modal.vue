<template>
  <div class="black-bg" v-if="isOpen">
    <div class="white-bg">
      <img :src="onerooms[curOneRoomNumber].image" />
      <h4>{{ onerooms[curOneRoomNumber].title }}</h4>
      <input v-model="month" />
      <p>
        {{ month }} 개월 선택함 :
        {{ onerooms[curOneRoomNumber].price * month }} 원
      </p>
      <button @click="$emit('closeModal')">Close</button>
      <!-- <Discount/> -->
    </div>
  </div>
</template>

<script>
// import Discount from './Discount.vue';

export default {
  name: "Modal",
  data() {
    return {
      month: 3,
    };
  },
  beforeUpdate() {
    if (this.month <= 2) {
      alert("3개월 이상 하셈");
    }
  },
  watch: {
    month(a) {
      if (isNaN(a)) {
        alert("문자 입력하지 마셈");

        this.month = 3;
      }

      if (a > 12) {
        alert("12개월 내로 입력하셈");

        this.month = 3;
      }
    },
  },
  props: {
    curOneRoomNumber: Number,
    isOpen: Boolean,
    onerooms: Array,
  },
  components: {
    // Discount,
  },
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>