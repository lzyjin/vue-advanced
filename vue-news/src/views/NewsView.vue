<template>
  <div>
    <!--<div v-for="news in newses" v-bind:key="news.id">{{ news.title }}</div>-->
    <!--<div v-for="news in this.$store.state.news" v-bind:key="news.id">{{ news.title }}</div>-->

    <p class="item" v-for="item in this.$store.state.news" v-bind:key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <!--<span>by <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link></span>-->
      <span>by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link></span>
      <span>{{ item.time_ago }}</span>
    </p>
  </div>
</template>

<script>
// views 폴더에는 라우팅에 관련된 페이지 컴포넌트만 있는 것이 좋다. (라우팅 정보만 담고 있는게 좋다. 데이터 통신하는 부분은 별도의 컴포넌트로 분리)

// https://axios-http.com/docs/intro
// axios는 Promise 기반의 HTTP 통신 라이브러리.
// 컴포넌트마다 axios를 import해서 사용하는게 아니라 폴더로 분리하여 관리한다.

// --- api 폴더로 분리 전
// import axios from "axios";
//
// export default {
//   name: "NewsView",
//   data() {
//     return {
//       newses: []
//     }
//   },
//   created() {
//     axios.get('https://api.hnpwa.com/v0/news/1.json')
//       .then(response => {
//         console.log(response);
//         this.newses = response.data;
//       }) // {data: Array(30), status: 200, statusText: '', headers: {…}, config: {…}, …}
//       .catch(error => console.error(error));
//   }
// }

// --- api 폴더로 분리 후
// import {fetchNewsList} from "@/api/index.js";
export default {
  // vuex 사용 후 (newses 데이터는 필요 없어짐)
  /*
  data() {
    return {
      newses: []
    }
  },
  */


  beforeCreate() {
    // 인스턴스가 초기화 된 직후,
    console.log('beforeCreate');
  },
  created() {
    // 인스턴스가 생성된 후,


    // vuex 사용 후
    this.$store.dispatch('FETCH_NEWS');
    // this는 vue 자체


    // vuex 사용 전
    /*
    // created는 data가 다 준비된 상태로 컴포넌트가 보여지게될 때 (화면에 나타나기 전)
    // 자바스크립트 상으로만 존재함
    // 1)
    fetchNewsList()
        .then(response => {
          console.log(response);
          // 2)
          this.newses = response.data;
        })
        .catch(error => console.error(error));
    */

  },





  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    // mounted는 컴포넌트가 화면에 나타난 후
    // 화면에 존재함
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    // updated는 화면의 데이터가 바뀌어서 화면이 다시 그려질 때
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    // destroyed는 컴포넌트가 화면에서 사라질 때
    console.log('destroyed');
  }
}

</script>

<style scoped>

</style>
