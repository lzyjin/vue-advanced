import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "@/store/mutations";
import actions from "@/store/actions";

/**
 * vuex를 왜 사용할까?
 * 1) vue에 있는 데이터를 한 곳에서 관리하기 위해
 * 2) 어디서든지 접근(수정) 할 수 있다.
 */
Vue.use(Vuex);

export const store = new Vuex.Store({
  // state: vue 컴포넌트의 data와 같음
  state: {
    news: [],
    jobs: [],
    asks: [],
  },

  // mutations: 자바로 치면 setter(값을 바꿔준다)
  // mutations: mutations,
    mutations,

  // getters: computed와 동일한 속성인데 store에 있는 거라고 생각하자
  getters:{
    getNews(state){
      return state.news;
    },
    getAsks(state) {
      return state.asks;
    }
  },

  // actions: api 통신하는 곳
  // actions: actions,
    actions,


});

