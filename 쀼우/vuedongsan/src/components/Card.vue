<template>
  <div>
    <img class="room-img" :src="oneroom.image" />
    <h4 @click="sendPick">
      {{ oneroom.title }}
    </h4>
    <h4>{{ oneroom.price }} 원</h4>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    oneroom: Object,
    curOneRoomNumber: Number,
    isOpen: Boolean,
  },
  methods: {
    sendPick() {
      this.$emit("openModal", this.oneroom.id);
    },
  },
};
</script>

<style>
</style>