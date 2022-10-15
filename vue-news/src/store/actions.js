// store 속성 모듈화

import {
    fetchAskList,
    fetchJobList,
    fetchNewsList,
    fetchUserList,
    fetchItem,
} from "@/api";

export default {

    FETCH_NEWS(context) {
        fetchNewsList()
            .then( response => {
                context.commit('SET_NEWS', response.data);
            } )
            .catch(err => {
                console.log(err);
            })
    },

    // 디스트럭처링
    FETCH_JOB({ commit }) {
        fetchJobList()
            .then(({ data }) => {
                commit('SET_JOB', data);
            })
            .catch(err => {
                console.log(err);
            });
    },

    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data);
            })
            .catch(err => {
                console.log(err);
            });
    },

    FETCH_USER({commit}, payload) {
        fetchUserList(payload.userName)
            .then( ({ data }) => {
                commit('SET_USER', data);
            } )
            .catch(err => {
                console.log(err);
            });
    },

    FETCH_ITEM({commit}, payload) {
        fetchItem(payload.itemId)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(err => {
                console.log(err);
            });
    }
}
