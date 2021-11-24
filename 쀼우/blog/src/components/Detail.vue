<template>
  <p>상세 페이지</p>
  <h5>{{ contents[$route.params.id].title }}</h5>
  <h5>{{ contents[$route.params.id].content }}</h5>
  <router-view></router-view>
</template>

<script>
export default {
    name: 'Detail',
    props: {
        contents: Array,
    }
}
</script>

<style>

</style>