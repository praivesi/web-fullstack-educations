<template>
  <!-- <div v-for="post in posts" :key="post">
    <Post :post="post"/>
  </div> -->
  <div>
    <div v-if="step == 0">
      <div v-for="post in posts" :key="post">
        <Post :post="post" />
      </div>
    </div>
    <!-- 저번시간에 만든거 -->
    <!-- <Post :게시물="posts[i]" v-for="(a, i) in posts" :key="i" /> -->

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div
        :class="selectedFilter"
        class="upload-image"
        :style="{ backgroundImage: `url(${curImgUrl})` }"
      ></div>
      <div class="filters">
        <div v-for="filter in filterData" :key="filter">
          <FilterBox :curImgUrl="curImgUrl" :filter="filter" class="filter-1">
              {{filter}}
          </FilterBox>
        </div>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div
      :class="selectedFilter"
        class="upload-image"
        :style="{ backgroundImage: `url(${curImgUrl})` }"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          v-model="userContent"
          @change="emitContent"
        />
      </div>
    </div>

    <div v-if="step == 3">
        <MyPage :one="1"/>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import filterData from "../assets/filters";
import MyPage from "./MyPage.vue";

export default {
  name: "Container",
  data() {
    return {
      userContent: "write!",
      filterData: filterData,
      selectedFilter: '',
    };
  },
  props: {
    posts: Array,
    step: Number,
    curImgUrl: String,
  },
  methods: {
    emitContent() {
      this.$emit("addContent", this.userContent);
    },
  },
  components: {
    Post,
    FilterBox,
    MyPage,
  },
  mounted(){
      this.emitter.on('changeFilter', (newFilter) => {
          this.selectedFilter = newFilter;
      });
  }
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>