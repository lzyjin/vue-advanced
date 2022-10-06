import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from "@/api";

/**
 * vuex를 왜 사용할까?
 * 1) vue에 있는 데이터를 한 곳에서 관리하기 위해
 * 2) 어디서든지 접근(수정) 할 수 있다.
 */
Vue.use(Vuex);

export const store = new Vuex.Store({
  // state: vue 컴포넌트의 data와 같음
  state: {
    news: []
  },

  // mutations: 자바로 치면 setter(값을 바꿔준다)
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    }
  },

  // getters: getter
  getters:{
    getNews(state){
      return state.news;
    }
  },

  // actions: api 통신하는 곳
  actions: {
    // 아래 코드를 이렇게 적을 수 있다.
    // fetchNews({commit}){
    //
    // },
    FETCH_NEWS(context) {
      fetchNewsList()
          .then( response => {
            console.log(response.data);

            // mutations에 데이터를 넘김
            context.commit('SET_NEWS', response.data);

            // 이렇게 쓸 수 없음
            // state.news = response.data;
          } )
          .catch(err => {
            console.log(err);
          })
    }
  },
});

