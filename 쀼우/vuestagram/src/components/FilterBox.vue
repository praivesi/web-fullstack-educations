<template>
  <div
  @click="fire"
    :class="filter + ' filter-item'"
    :style="`background-image:url(${curImgUrl})`"
  >
  <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    curImgUrl: String,
    filter: String,
  },
  methods: {
      fire(){
          this.emitter.emit('changeFilter', this.filter);
      }
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>