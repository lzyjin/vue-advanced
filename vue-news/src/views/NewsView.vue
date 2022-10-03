<template>
  <div>
    <div v-for="news in newses" v-bind:key="news.id">{{ news.title }}</div>
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
import {fetchNewsList} from "@/api/index.js";
export default {
  data() {
    return {
      newses: []
    }
  },
  created() {
    fetchNewsList()
        .then(response => {
          console.log(response);
          this.newses = response.data;
        })
        .catch(error => console.error(error));
  },
}

</script>

<style scoped>

</style>
