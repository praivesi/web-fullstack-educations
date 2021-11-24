<template>
  <div v-for="content in contents" :key="content">
      <h5 @click="$router.push('/detail/0')" :contents="contents">{{ content.title }}</h5>
      <p>{{ content.date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    contents: Array,
  },
};
</script>

<style>
</style>