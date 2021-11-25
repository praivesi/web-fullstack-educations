<template>
  <div class="header">
    <ul class="header-button-left">
      <li
        @click="
          if (step > 0) {
            step--;
          }">
        Cancel
      </li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1"
        @click="
          if (step < 2) {
            step++;
          }"
      >
        Next
      </li>
      <li v-if="step == 2" @click="publish">
        Publish
      </li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>안녕 {{ name }} {{ age }}</h4>
  <button @click="changeName">버튼</button>
  <button @click="$store.commit('addAge', 10)">나이추가</button>

  <p>{{ myMore }}</p>
  <button @click="$store.dispatch('getData')">더보기 버튼</button>

  <Container :posts="posts" :step="step" :curImgUrl="curImgUrl" @addContent="publish($event)"/>
  <button @click="reqMorePost">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import postData from "./assets/posts";
import axios from "axios";
import {mapState, mapMutations} from 'vuex'

export default {
  name: "App",
  data() {
    return {
      step: 3,
      origin_posts: postData,
      posts: postData,
      curImgUrl: "",
      selectedFilter: '',
    };
  },
  components: {
    Container,
  },
  computed: {
    ...mapState(['name', 'age', 'likes']),
    ...mapState({ 'myMore' : 'more'}),
  },
  methods: {
    ...mapMutations(['changeName', 'setMore', 'pressLike']),
    reqMorePost() {
      axios
        .get("https://codingapple1.github.io/vue/more1.json")
        .then((payload) => {
          console.log(payload.data);
          this.posts.push(payload.data);
        });
    },
    upload(e) {
      let uploadFiles = e.target.files;
      console.log(uploadFiles);

      this.curImgUrl = URL.createObjectURL(uploadFiles[0]);

      this.step++;
    },
    publish(userContent){
      var mypost =   {
      name: "Kim Hyun",
      userImage: this.curImgUrl,
      postImage: "https://placeimg.com/640/480/arch",
      likes: 36,
      date: "May 15",
      liked: false,
      content: userContent,
      filter: "perpetua"
    };
      this.posts.unshift(mypost);
      this.step = 0;
    }
  },
  mounted(){
    this.emitter.on('changeFilter', (newFilter)=> {
      this.selectedFilter = newFilter;
    });
  }
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
