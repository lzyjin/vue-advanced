import Vue from 'vue'
import App from './App.vue'
import { router } from '@/routes/index.js' // 구조분해할당
Vue.config.productionTip = false
// import Vuex from 'vuex';
import { store } from "@/store";

// 이런식으로 정의할 수 있으나 라우터 코드가 길어질 경우 지저분해지므로 파일을 따로 만들어 관리한다.
// const routes = new VueRouter({
//   routes: [
//
//   ]
// });

// 별도의 폴더/파일로 분리해서 관리
// new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
// });

new Vue({
  render: h => h(App),
  // router: router,
  // 위를 아래처럼 축약할 수 있음
  router,
  store,
}).$mount('#app')
