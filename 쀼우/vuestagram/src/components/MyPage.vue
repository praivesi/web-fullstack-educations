<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" />
    <div class="post-header" v-for="person in follower" :key="person">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${person.image})` }"
      ></div>
      <span class="profile-name">{{ person.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, toRefs } from "vue";
import axios from "axios";

export default {
  props: {
    one: Number,
  },
  setup(props) {
    let follower = ref([]);

    let { one } = toRefs(props);
    console.log(one.value);

    watch(one, ()=>{
        
    });


    onMounted(() => {
      axios.get("/follower.json").then((payload) => {
        follower.value = payload.data;
      });
    });

    return { follower };
  },
};
</script>

<style>
</style>