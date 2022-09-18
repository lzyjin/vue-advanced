import Vue from 'vue'
import App from './App.vue'
import { router } from '@/routes/index.js' // 구조분해할당
Vue.config.productionTip = false

// 이런식으로 정의할 수 있으나 라우터 코드가 길어질 경우 지저분해지므로 파일을 따로 만들어 관리한다.
// const routes = new VueRouter({
//   routes: [
//
//   ]
// });

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
