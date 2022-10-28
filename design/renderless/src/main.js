import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 위 함수를 하나씩 풀어보면

  // 1
  // render: function(createElement) {
  //   return createElement(App);
  // },

  // 2
  // render: function(h) {
  //   return h(App);
  // },

  // 3
  // render: (h) => {
  //   h(App);
  // },

  // 4
  // render: h => h(App),

}).$mount('#app')
