// store 속성 모듈화

import {
    fetchUserList,
    fetchItem,
    fetchList,
} from "@/api";

export default {
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
    },

    FETCH_LIST({commit}, pageName) {
        fetchList(pageName)
            .then(({data}) => {
                commit('SET_LIST', data);
            })
            .catch(err => {
                console.log(err);
            });
    },
}
