// store 속성 모듈화

import {fetchAskList, fetchJobList, fetchNewsList} from "@/api";

export default {
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
    },

    // 디스트럭처링
    FETCH_JOB({ commit }) {
        fetchJobList()
            // 디스트럭처링
            .then(({ data }) => {
                console.log(data);

                commit('SET_JOB', data);
            })
            .catch(err => {
                console.log(err);
            });
    },

    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                console.log(data);

                commit('SET_ASK', data);
            })
            .catch(err => {
                console.log(err);
            });
    }
}