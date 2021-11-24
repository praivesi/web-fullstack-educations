<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>

  <Discount/>

  <button @click="priceSort">가격순정렬</button>
  <button @click="priceSortReverse">가격역순정렬</button>
  <button @click="sortBack">되돌리기</button>


  <transition name="fade">
    <Modal
      @closeModal="isOpen = false"
      :onerooms="onerooms"
      :curOneRoomNumber="curOneRoomNumber"
      :isOpen="isOpen"
    />
  </transition>
  <div v-for="(oneroom, i) in onerooms" :key="oneroom">
    <Card
      @openModal="
        isOpen = true;
        curOneRoomNumber = $event;
      "
      :oneroom="onerooms[i]"
      :curOneRoomNumber="curOneRoomNumber"
      :isOpen="isOpen"
    />
  </div>
</template>

<script>
import data from "./assets/oneroom.js";
import Discount from "./components/Discount.vue";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  data() {
    return {
      onerooms_origin: [...data],
      curOneRoomNumber: 0,
      isOpen: false,
      reportCnts: [0, 0, 0],
      menus: ["Home", "Shop", "About"],
      onerooms: data,
    };
  },
  methods: {
    sortBack(){
      this.onerooms = [...this.onerooms_origin];
    },
    priceSort(){
      this.onerooms.sort(function(a, b){
        return a.price - b.price;
      });
    },
    priceSortReverse(){
      this.onerooms.sort(function(a, b){
        return b.price - a.price;
      })
    },
  },
  mounted(){
    setTimeout(() => {
      this.showDiscount = false;
    }, 2000);
  },
  components: {
    Discount,
    Modal,
    Card,
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  opacity: 0;
}

.start {
  opacity: 0;
  transition: all 0.7s;
}

.end {
  opacity: 1;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}
</style>
