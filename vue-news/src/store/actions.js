// store 속성 모듈화

import {
    fetchUserList,
    fetchItem,
    fetchList,
} from "@/api";

export default {
    FETCH_USER({commit}, payload) {
        return fetchUserList(payload.userName)
            .then( ({ data }) => {
                commit('SET_USER', data);
            } )
            .catch(err => {
                console.log(err);
            });
    },

    FETCH_ITEM({commit}, payload) {
        return fetchItem(payload.itemId)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(err => {
                console.log(err);
            });
    },

    // #2
    FETCH_LIST({commit}, pageName) {
        // console.log("OUTER", fetchList(pageName).then(response=>{
        //     console.log("INNER",response.data)
        //     return response
        // }));

        /**
         * 1. 프로미스 다음에 붙은 then은 프로미스가 끝나면 무조건 실행된다.
         * 2.then은 Promise를 반환한다.
         */

        // #3
        return fetchList(pageName)
        // fetchList(pageName) // 이 코드로는 ListMixin에서 .then으로 받은 코드가 원하는 순서대로 실행되지 않는다. ( 5 -> 4 순서로 출력됌)

            .then(response => {
                // #4 데이터 설정
                console.log(4);
                console.log('pageName', pageName);
                console.log('response', response);
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(err => {
                console.log(err);
            });


    },
}
